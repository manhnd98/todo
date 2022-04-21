import { Box, HStack, Text } from 'native-base'
import { memo, useEffect } from 'react'
import { ColorValue, Pressable } from 'react-native'
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withSequence,
    withTiming
} from 'react-native-reanimated'

interface Props {
  strikeThrough?: boolean

  textColor?: string

  inactiveTextColor?: string

  children?: React.ReactNode

  onPress?: () => void
}

const AnimatedBox = Animated.createAnimatedComponent(Box)
const AnimatedHStack = Animated.createAnimatedComponent(HStack)
const AnimatedText = Animated.createAnimatedComponent(Text)

const AnimatedTaskLabel = memo(
  (props: Props = { inactiveTextColor: '#fafafa', textColor: 'black' }) => {
    const { strikeThrough, textColor, inactiveTextColor, children, onPress } =
      props as Required<Props>

    const hStackOffset = useSharedValue(0)
    const hStackAnimatedStyles = useAnimatedStyle(
      () => ({
        transform: [
          {
            translateX: hStackOffset.value
          }
        ]
      }),
      [strikeThrough]
    )

    const textColorProgress = useSharedValue(0)
    const textColorAnimatedStyles = useAnimatedStyle<{ color: ColorValue }>(
      () => ({
        color: interpolateColor(
          textColorProgress.value,
          [0, 1],
          [textColor, inactiveTextColor]
        ) as ColorValue
      }),
      [strikeThrough, textColor, inactiveTextColor]
    )

    const strikeThroughWidth = useSharedValue(0)
    const trikeThroughAnimatedStyles = useAnimatedStyle(
      () => ({
        width: `${strikeThroughWidth.value * 100}%`,
        borderBottomColor: interpolateColor(
          textColorProgress.value,
          [0, 1],
          [textColor, inactiveTextColor]
        ) as ColorValue
      }),
      [strikeThrough, strikeThroughWidth, textColor, inactiveTextColor]
    )

    useEffect(() => {
      const easing = Easing.out(Easing.quad)
      if (strikeThrough) {
        hStackOffset.value = withSequence(
          withTiming(4, {
            duration: 200,
            easing
          }),
          withTiming(0, {
            duration: 200,
            easing
          })
        )

        textColorProgress.value = withDelay(
          400,
          withTiming(1, { duration: 400, easing })
        );

        strikeThroughWidth.value = withTiming(1, {duration: 400, easing});
      } else {
        strikeThroughWidth.value = withTiming(0, {duration: 100, easing});
        textColorProgress.value = withTiming(0, { duration: 400, easing })
      }
    }, [strikeThrough])

    return (
      <Pressable onPress={onPress}>
        <AnimatedHStack alignItems="center" style={[hStackAnimatedStyles]}>
          <AnimatedText
            style={[textColorAnimatedStyles]}
            fontSize={16}
            noOfLines={1}
            isTruncated
            px={1}
          >
            {children}
          </AnimatedText>
          <AnimatedBox
            position="absolute"
            h={1}
            borderBottomWidth={1}
            style={[trikeThroughAnimatedStyles]}
          ></AnimatedBox>
        </AnimatedHStack>
      </Pressable>
    )
  }
)

export default AnimatedTaskLabel

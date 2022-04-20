import React, { useEffect } from 'react'
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedProps,
    useSharedValue,
    withTiming
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import AnimatedStroke from './animated-stroke'

const MARGIN = 10
const vWidth = 30 + MARGIN
const vHeight = 30 + MARGIN
const outlineBoxPath =
  'M27.25 1H4.75C2.67893 1 1 2.67893 1 4.75V27.25C1 29.3211 2.67893 31 4.75 31H27.25C29.3211 31 31 29.3211 31 27.25V4.75C31 2.67893 29.3211 1 27.25 1Z'
const checkMarkPath = 'M24.75 8.73438L12.5547 23.2656L7.32812 17.4531'
const AnimatedPath = Animated.createAnimatedComponent(Path)

interface Props {
  checkmarkColor?: string
  highlightColor?: string
  boxOutlineColor?: string
  checked?: boolean
  width?: number
  height?: number
}
function AnimatedCheckbox({
  checkmarkColor = '#000000',
  highlightColor = '#FF0000',
  boxOutlineColor = '#000000',
  checked = false
}: Props) {
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withTiming(checked ? 1 : 0, {
      duration: checked ? 300 : 100,
      easing: Easing.linear
    })
  }, [checked])

  const animatedBoxProps = useAnimatedProps(
    () => ({
      stroke: interpolateColor(
        Easing.bezierFn(0.16, 1, 0.3, 1)(progress.value),
        [0, 1],
        [boxOutlineColor, highlightColor],
        'RGB'
      )
    }),
    [highlightColor, boxOutlineColor]
  )

  return (
    <Svg
      width={vWidth}
      height={vHeight}
      viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}
    >
      <AnimatedStroke
        d={checkMarkPath}
        strokeWidth={2}
        stroke={checkmarkColor}
        strokeLinejoin="round"
        strokeLinecap="round"
        progress={progress}
        strokeOpacity={checked || false ? 1 : 0}
      />
      <AnimatedPath
        d={outlineBoxPath}
        animatedProps={animatedBoxProps}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default AnimatedCheckbox

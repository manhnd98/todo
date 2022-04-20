import {
    Box,
    HStack,
    Text,
    themeTools,
    useColorModeValue,
    useTheme
} from 'native-base'
import { Pressable } from 'react-native'
import { AnimatedCheckbox } from '../animated/checkbox'

interface Props {
  isDone?: boolean

  onToggleCheckbox?: () => void
}

const EMPTY_FUNCTION = () => {}

function TaskItem(
  props: Props = { isDone: false, onToggleCheckbox: EMPTY_FUNCTION }
) {
  const { isDone, onToggleCheckbox } = props

  const theme = useTheme()
  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('blue.500', 'blue.400')
  )
  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  )
  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('black', 'white')
  )
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  )

  return (
    <HStack alignItems="center" w='full' mx={4} py={2} bg={useColorModeValue('warmGray.50', 'primary.900')}>
      <Box mr={2}>
        <Pressable onPress={onToggleCheckbox}>
          <AnimatedCheckbox
            highlightColor={highlightColor}
            boxOutlineColor={boxStroke}
            checkmarkColor={checkmarkColor}
            checked={isDone}
          />
        </Pressable>
      </Box>
      <Text>Hello world</Text>
    </HStack>
  )
}

export default TaskItem

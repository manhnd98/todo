import { Center, useColorModeValue, VStack } from 'native-base'
import { useCallback, useState } from 'react'
import TaskItem from '../../components/task-item/task-item'
import ThemeToggle from '../../components/theme-toggle'
function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  const boxColor = useColorModeValue('black', 'white');

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox}></TaskItem>
        <ThemeToggle></ThemeToggle>
      </VStack>
    </Center>
  )
}

export default MainScreen

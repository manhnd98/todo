import { Box, Center, Text, useColorModeValue, VStack } from 'native-base'
import ThemeToggle from '../../components/theme-toggle'

function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
        <VStack space={5} alignItems="center">
            <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                <Text>Hello world</Text>
            </Box>
            <ThemeToggle></ThemeToggle>
        </VStack>
    </Center>
  )
}

export default MainScreen

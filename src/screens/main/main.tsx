import { Box, Center, Text, VStack } from 'native-base'

function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      flex={1}
    >
      <Box>
        <VStack>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </VStack>
      </Box>
    </Center>
  )
}

export default MainScreen

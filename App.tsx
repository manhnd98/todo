import { StyleSheet } from 'react-native'
import AppContainer from './src/components/app-container'
import Navigator from './src/screens'
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AppContainer>
        <Navigator></Navigator>
    </AppContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

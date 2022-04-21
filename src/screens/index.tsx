import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './about/about';
import MainScreen from './main/main';

function Navigator() {
    const Drawer = createDrawerNavigator();
    return <Drawer.Navigator initialRouteName='Main'>
        <Drawer.Screen name='Main' component={MainScreen}></Drawer.Screen>
        <Drawer.Screen name='About' component={AboutScreen}></Drawer.Screen>
    </Drawer.Navigator>;
}

export default Navigator;
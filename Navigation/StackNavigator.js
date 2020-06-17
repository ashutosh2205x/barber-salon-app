import { createStackNavigator,  } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import MapScreen from '../Screens/MapScreen';
import  HomeScreen from '../Screens/HomeScreen';

const ScreenNavigator = createStackNavigator({
    Home : HomeScreen,
    Details : MapScreen
})

export default createAppContainer(ScreenNavigator)
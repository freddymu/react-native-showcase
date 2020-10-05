import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Satu from './components/Satu';
import Dua from './components/Dua';
import Tiga from './components/Tiga';
import Empat from './components/Empat';
import Lima from './components/Lima';
import Enam from './components/Enam';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HalLima">
      <Drawer.Screen name="HalLima" component={Lima} />
      <Drawer.Screen name="HalEnam" component={Enam} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

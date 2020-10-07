import * as React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import DeviceInfoDemo from './components/DeviceInfoDemo';
import NetworkInfo from './components/NetworkInfo';
import ImagePickerDemo from './components/ImagePickerDemo';
import ShareMessageAndFile from './components/ShareMessageAndFile';
import ClipboardDemo from './components/ClipboardDemo';
import GeolocationDemo from './components/GeolocationDemo';
import AudioDemo from './components/AudioDemo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function MyStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Showcase App',
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.openDrawer()}
              style={{paddingLeft: 10}}>
              <Image
                style={{width: 50}}
                source={{
                  uri:
                    'https://www.iconfinder.com/data/icons/mini-icon-set-general-office/91/General_-_Office_30-512.png',
                }}
              />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HalLima" initialRouteName="Home">
      <Drawer.Screen name="Home" component={MyStack} />
      <Drawer.Screen name="DeviceInfoDemo" component={DeviceInfoDemo} />
      <Drawer.Screen name="NetworkInfo" component={NetworkInfo} />
      <Drawer.Screen name="ImagePickerDemo" component={ImagePickerDemo} />
      <Drawer.Screen
        name="ShareMessageAndFile"
        component={ShareMessageAndFile}
      />
      <Drawer.Screen name="ClipboardDemo" component={ClipboardDemo} />
      <Drawer.Screen name="GeolocationDemo" component={GeolocationDemo} />
      <Drawer.Screen name="AudioDemo" component={AudioDemo} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const navigationRef = React.useRef(null);

  return (
    <NavigationContainer ref={navigationRef}>
      <MyDrawer />
    </NavigationContainer>
  );
}

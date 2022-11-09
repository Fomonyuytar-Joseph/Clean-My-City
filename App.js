/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReportNewTrashScreen from './src/views/screens/ReportNewTrashScreen';
import ReportTrashScreen from './src/views/screens/ReportTrashScreen';
import MarketPlaceScreen from './src/views/screens/MarketPlaceScreen';
import COLORS from './src/consts/colors';
import ReportTrashButton from './src/views/components/ReportTrashButton';
import TrashStackScreen from './src/views/screens/TrashStackScreen';
import MarketPlaceStackScreen from './src/views/screens/MarketPlaceStackScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Trash Report') {
              iconName = focused ? 'file-document' : 'file-document';
            } else if (route.name === 'MARKETPLACE') {
              iconName = focused ? 'cart' : 'cart-outline';
            } 

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
                style={{marginBottom: -10}}
              />
            );
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: 'gray',
         
          tabBarStyle: {
            backgroundColor: COLORS.black,
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            height: 70,
            paddingBottom: 10,
            borderRadius: 15,
          },
        })}>
        <Tab.Screen
          name="Trash Report"
          component={TrashStackScreen}
          options={{headerShown: false}}
         
        />
       
        <Tab.Screen
          name="MARKETPLACE"
          component={MarketPlaceStackScreen}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

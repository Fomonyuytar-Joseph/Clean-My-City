import { View, Text } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketPlaceScreen from './MarketPlaceScreen';


const Stack = createNativeStackNavigator();
const MarketPlaceStackScreen = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="MarketPlace" component={MarketPlaceScreen} />
      </Stack.Navigator>
  )
}

export default MarketPlaceStackScreen
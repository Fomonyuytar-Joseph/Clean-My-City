import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketPlaceScreen from './MarketPlaceScreen';
import PostNewScreen from './PostNewScreen';
import MarketPlaceDetailsScreen from './MarketPlaceDetailsScreen';
import ReportTrashButton from '../components/ReportTrashButton';




const Stack = createNativeStackNavigator();
const MarketPlaceStackScreen = () => {
  return (
    <Stack.Navigator  screenOptions={({route}) => ({
      headerStyle: {
          backgroundColor: COLORS.themePrimary,
        },
        })}>
        <Stack.Screen name="MarketPlace" component={MarketPlaceScreen} 
          options={({ route, navigation }) => ({
            headerTitleStyle: {color: COLORS.white},
            headerLeft: props => (
              <Image
              source={require('./logo.png')}
               style={{height:50,width:50,borderRadius:45,marginRight:8}}
              />),
              headerRight:props=>{
                return( 
                  <TouchableOpacity onPress={()=>navigation.navigate("New Trash Ad" )}>
                       <ReportTrashButton text={"New Trash ad"} icon={"post-outline"}/>
                  </TouchableOpacity>
              
                )
               
              },


          })}
        
        
        
        />
        <Stack.Screen name="Post Details" component={MarketPlaceDetailsScreen}  options={({ route, navigation }) => ({
            headerTitleStyle: {color: COLORS.white},
            headerTintColor :"white"
            // headerShown:false
           
           

            

          })}/>
        <Stack.Screen name="New Trash Ad" component={PostNewScreen}  options={({ route, navigation }) => ({
            headerTitleStyle: {color: COLORS.white},
            headerTintColor :"white"
            // headerShown:false
           
           

            

          })}/>
      </Stack.Navigator>
  )
}

export default MarketPlaceStackScreen
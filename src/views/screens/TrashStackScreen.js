import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportNewTrashScreen from './ReportNewTrashScreen';
import ReportTrashScreen from "./ReportTrashScreen"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../consts/colors';
import ReportTrashButton from '../components/ReportTrashButton';



const Stack = createNativeStackNavigator();
const TrashStackScreen = () => {
  return (
    
    <Stack.Navigator
    screenOptions={({route}) => ({
        headerStyle: {
            backgroundColor: '#000000',
          },


    })}
    
    >
    <Stack.Screen name="Trash Reports"  component={ReportTrashScreen} 
          
          options={({ route, navigation }) => ({
            headerTitleStyle: {color: COLORS.white},
            // headerShown:false
           
            headerLeft: props => (
              <MaterialCommunityIcons
                name={'broom'}
                color={'white'}
                size={30}
              />
            ),

            headerRight:props=>{
                return( 
                  <TouchableOpacity onPress={()=>navigation.navigate("Report Trash" )}>
                       <ReportTrashButton/>
                  </TouchableOpacity>
              
                )
               
              },

          })}
          
          
          />
    <Stack.Screen name="Report Trash"  component={ReportNewTrashScreen}  options={({ route, navigation }) => ({
            headerTitleStyle: {color: COLORS.white},
            headerTintColor :"white"
            // headerShown:false
           
           

            

          })}
           />
  </Stack.Navigator>
  
  )
}

export default TrashStackScreen
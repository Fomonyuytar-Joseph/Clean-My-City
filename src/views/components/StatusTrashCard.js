import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PHONE from '../../consts/phoneDimensions';



const statusTrashCard = ({status , icon, themeColor,active ,index,onPressCard}) => {
  return (
    <TouchableOpacity style={[styles.statusContainer,{borderColor: themeColor, backgroundColor:active == index ?themeColor:"white"}]} onPress={()=>onPressCard(index)}>
     <View  style={styles.textContainer }>
        <Text style={[styles.textStyle,{color: active == index ? "white" :themeColor }]}>{status}</Text>
     </View>
     <View  style={styles.icnContainer}>
   <MaterialCommunityIcons name={icon} color={active == index ? "white":themeColor} size={22}/>

     </View>
    </TouchableOpacity>
  )
}

const styles =StyleSheet.create({
     statusContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth: 3,
       // borderColor: themeColor,
        width:PHONE.width/2.8,
        height:PHONE.height/8,
        margin:8,
        borderRadius:6


     },
     textContainer:{
     
          },
          icnContainer:{
     
          },
          textStyle:{
            fontWeight:"bold",
            fontSize:14,
            //color:themeColor,
          }
})

export default statusTrashCard
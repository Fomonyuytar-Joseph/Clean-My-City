import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import Octicons from 'react-native-vector-icons/MaterialCommunityIcons';



const ReportTrashButton = ({navigation, text ,icon}) => {
  return (
    <View style={styles.ButtonContainer} >
      <Text style={[styles.textStyle,{color:COLORS.themePrimary}]}>{text}</Text>
      <Octicons
                name={icon}
                color={COLORS.themePrimary}
                size={20}
              />

    </View>
  )
}

const styles =StyleSheet.create({
   ButtonContainer:{
    backgroundColor:COLORS.white,
    width:120,
    height:30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    borderRadius:5,
    marginRight:5
   },
   textStyle:{
    color:COLORS.black,
    textAlign:"center"
   }
})

export default ReportTrashButton
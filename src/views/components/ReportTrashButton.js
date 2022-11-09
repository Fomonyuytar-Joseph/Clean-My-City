import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import Octicons from 'react-native-vector-icons/Octicons';



const ReportTrashButton = ({navigation}) => {
  return (
    <View style={styles.ButtonContainer} >
      <Text style={styles.textStyle}>Report Trash</Text>
      <Octicons
                name={'report'}
                color={'black'}
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
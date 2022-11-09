import { View, Text ,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'
import PHONE from '../../consts/phoneDimensions'
import Reportcard from '../components/Reportcard'


const ReportTrashScreen = () => {
  return (
   
        <ScrollView contentContainerStyle={styles.MainContainer}>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
        <Reportcard/>
       </ScrollView>
   
  )
}

const styles =StyleSheet.create({
    MainContainer:{
        
        flexDirection:"row",
        backgroundColor:COLORS.white,
       justifyContent:"center",
        flexWrap: 'wrap',
        paddingBottom: 85,
        paddingTop:10
    }
})

export default ReportTrashScreen
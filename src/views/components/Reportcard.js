import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import PHONE from '../../consts/phoneDimensions'
import COLORS from '../../consts/colors'

const Reportcard = () => {
  return (
    <View style={styles.ReportContainer}>
      <View style={styles.ImageContainer}>
      <Image
          style={styles.ImageStyle}
          source={require('../../../assests/img/trash.jpg')}
        />
      </View>
      <View  style={styles.TextContainer}>
        <Text  style={styles.stateStyle}>
        Half Full
        </Text>

        <Text  style={styles.timeStamptyle}>
        12th Sep 2014 2:00pm
        </Text>

      </View>
    </View>
  )
}

const styles =StyleSheet.create({
    ReportContainer:{
        width:PHONE.width/2.2,
        height:PHONE.height/3.2,
       
        margin:8,
        marginTop:12,
        marginLeft:0
    },
    ImageContainer:{
        height:"70%",
        
     
    },
    ImageStyle:{
        width:"100%",
        height:"100%",
        borderTopLeftRadius:5,
        borderTopRightRadius:5

    },
    TextContainer:{
      paddingTop:5 ,
      paddingBottom:10,
       justifyContent:"center",
       alignItems:"center",
       backgroundColor:COLORS.green,
       borderBottomLeftRadius:5,
       borderBottomRightRadius:5

    },
        stateStyle:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:"bold"
    }
        ,
        timeStamptyle:{
        fontSize:14,
    }

})
export default Reportcard
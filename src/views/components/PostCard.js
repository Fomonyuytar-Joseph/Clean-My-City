import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import PHONE from '../../consts/phoneDimensions'
import COLORS from '../../consts/colors'

const PostCard = ({title,description,price,image,category}) => {
  return (
    <View style={styles.ReportContainer}>
      <View style={styles.ImageContainer}>
      <Image
          style={styles.ImageStyle}
          source={{uri:image}}
        />

        <View style={styles.categoryStyle}>
            <Text style={{fontWeight:"bold",color:COLORS.black}}>{category}</Text>

        </View>

      </View>
      <View  style={styles.TextContainer}>
        <Text  style={styles.titleStyle}>
        {title}
        </Text>

        <Text  style={styles.descriptionStyle}>
        {description}
        </Text>
        <Text  style={styles.priceStyle}>
        {price}
        </Text>
        <Text  style={styles.seeMoreStyle}>
        {"See more >>"}
        </Text>

      </View>
    </View>
  )
}

const styles =StyleSheet.create({
    ReportContainer:{
        width:PHONE.width/2.1,
        height:PHONE.height/3.2,
       
        margin:8,
        marginTop:12,
        marginLeft:0,
        marginBottom:30
    },
    ImageContainer:{
        height:"65%",

        
     
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
       borderBottomRightRadius:5,
       width:"100%"

    },
        titleStyle:{
        fontSize:20,
        color:COLORS.black,
        fontWeight:"bold"
    } ,
        descriptionStyle:{
            marginTop:2,
        fontSize:14,
        textAlign:"center",
        color:COLORS.black
    },
    priceStyle:{
        fontSize:17,
        marginTop:2,
        color:COLORS.black,
        fontWeight:"bold"
    },
    seeMoreStyle:{
        fontSize:13,
        color:COLORS.black,
        fontWeight:"bold"

    },
    categoryStyle:{
        position:"absolute",
        width:70,
        height:25,
        backgroundColor:COLORS.white,
        borderRadius:5,
        textAlign:"center",
        top:5,
        right: 9,
        justifyContent:"center",
        alignItems:"center",
        color:COLORS.black
        



    }

})
export default PostCard
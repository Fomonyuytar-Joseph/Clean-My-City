import { View, Text ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import {React,useState,useEffect} from 'react'
import COLORS from '../../consts/colors'
import PHONE from '../../consts/phoneDimensions'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SubmitButton from '../components/SubmitButton';
import StatusTrashCard from '../components/StatusTrashCard';




const ReportNewTrashScreen = () => {
  const cards=[
    {
      status:"EMPTY",
      icon: "emoticon-happy-outline",
      themeColor:COLORS.darkGreen
    },
    {
      status:"FULL",
      icon: "emoticon-confused-outline" ,
      themeColor:COLORS.blue
    },
    {
      status:"OVERFLOWING",
      icon: "emoticon-angry-outline",
      themeColor:COLORS.red
    },
    {
      status:"UNSURE",
      icon: "emoticon-neutral-outline" ,
      themeColor:COLORS.pink
    },
  ]


  const [active ,setActive] = useState(-1);

  const onPressCard =(value)=>{
    setActive(value) 
  } 

  //console.log(cards[active]?.status)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.ImageCameraContainer}>
        <View style={styles.textContainer}>
      <Text>Tap on Camera Icon below to take a Picture</Text>
          </View>
         
          <View style={styles.cameraIconContainer}>
<TouchableOpacity>
  <MaterialCommunityIcons name={"camera"} size={40} color={COLORS.black}/>
</TouchableOpacity>
          </View>
      </View>

      <View style={styles.trashLikeContainer}>
        <Text style={styles.textStyle}>How is the trash Like ?</Text>
      </View>

      <View style={styles.statusTrashContainer}>
        {
           cards.map((card,index)=>
           <StatusTrashCard
           key={card.status}
           status={card.status}
           icon={card.icon}
           themeColor={card.themeColor}
           active={active}
           index={index}
           onPressCard={onPressCard}
           
           />
           )
        }
      


   
  
      </View>

      <View style={styles.buttonContainer}>
      <SubmitButton/>
      </View>
     
    </View>
  )
}


const styles =StyleSheet.create({

mainContainer:{
  flex:1,
  
  //backgroundColor:COLORS.pink
},
ImageCameraContainer:{
  height:PHONE.height/2.7,
  borderWidth: 1,
  borderColor: "#20232a",
  margin:8,
  justifyContent:"center",
   alignItems:"center"
  },
  textContainer:{
    position:"relative",
   justifyContent:"center",
   alignItems:"center"
  },
  cameraIconContainer:{
    position:"absolute",
    top:220,
    bottom: 10,
    right:10
  },
  trashLikeContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  textStyle:{
    fontWeight:"bold",
    color:COLORS.black,
    fontSize:17
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  statusTrashContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    flexWrap: 'wrap',
  }





})
export default ReportNewTrashScreen
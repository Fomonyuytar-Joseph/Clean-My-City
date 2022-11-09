import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {React, useState, useEffect} from 'react';
import COLORS from '../../consts/colors';
import PHONE from '../../consts/phoneDimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SubmitButton from '../components/SubmitButton';
import StatusTrashCard from '../components/StatusTrashCard';
import ImagePicker from 'react-native-image-crop-picker';



const ReportNewTrashScreen = () => {
  const cards = [
    {
      status: 'EMPTY',
      icon: 'emoticon-happy-outline',
      themeColor: COLORS.darkGreen,
    },
    {
      status: 'FULL',
      icon: 'emoticon-confused-outline',
      themeColor: COLORS.blue,
    },
    {
      status: 'OVERFLOWING',
      icon: 'emoticon-angry-outline',
      themeColor: COLORS.red,
    },
    {
      status: 'UNSURE',
      icon: 'emoticon-neutral-outline',
      themeColor: COLORS.pink,
    },
  ];

  const [active, setActive] = useState(-1);
  const [userImage, setUserImage] = useState("");
  const [imageActive, setImageActive] = useState(false);
  

  // ImagePicker.openPicker({
  //   width: 300,
  //   height: 400,
  //   cropping: false
  // }).then(image => {
  //   console.log(image);
  // });

  const UploadImage = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      setUserImage(image.path);
      setImageActive(true)
    });
  };

  console.log(userImage);

  const onPressCard = value => {
    setActive(value);
  };
  // var icon = userImage
  // ? require(userImage)
  // : require("./agri.jpg")
  //console.log(cards[active]?.status)

  return (
    <View style={styles.mainContainer}>
  {
    imageActive ? (
       <View style={styles.ImageContainer}>
   
      <Image  style={{width:"85%",height:"86%",justifyContent:"center"}} source={{uri:userImage}} />
      </View>
      
    )
     :
    <View style={styles.ImageCameraContainer}>
    <View style={styles.textContainer}>
      <Text>Tap on Camera Icon below to take a Picture</Text>
    </View>

    <View style={styles.cameraIconContainer}>
      <TouchableOpacity onPress={UploadImage}>
        <MaterialCommunityIcons
          name={'camera'}
          size={40}
          color={COLORS.black}
        />
      </TouchableOpacity>
    </View>
  </View>
  }    

      <View style={styles.trashLikeContainer}>
        <Text style={styles.textStyle}>How is the trash Like ?</Text>
      </View>

      <View style={styles.statusTrashContainer}>
        {cards.map((card, index) => (
          <StatusTrashCard
            key={card.status}
            status={card.status}
            icon={card.icon}
            themeColor={card.themeColor}
            active={active}
            index={index}
            onPressCard={onPressCard}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <SubmitButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: 'white',
  },
  ImageCameraContainer: {
    height: PHONE.height / 2.7,
    borderWidth: 1,
    borderColor: '#20232a',
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIconContainer: {
    position: 'absolute',
    top: 220,
    bottom: 10,
    right: 10,
  },
  trashLikeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: COLORS.black,
    fontSize: 17,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },
  statusTrashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ImageContainer:{
    height: PHONE.height / 2.7,
    justifyContent: 'center',
    alignItems: 'center',

  },
  ImageStyle: {
    width: '40%',
    height:"50%",
    resizeMode: 'contain',
  }
});
export default ReportNewTrashScreen;

import {View, Text, TouchableOpacity, StyleSheet, Image,ScrollView,TextInput} from 'react-native';
import {React, useState, useEffect} from 'react';
import COLORS from '../../consts/colors';
import PHONE from '../../consts/phoneDimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SubmitButton from '../components/SubmitButton';
import StatusTrashCard from '../components/StatusTrashCard';
import ImagePicker from 'react-native-image-crop-picker';
import Geolocation from '@react-native-community/geolocation';
import {db ,storage} from "./../../../Firebase/firebase"
import uuid from 'react-native-uuid';



import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  GeoPoint,
  PermissionsAndroid
} from "firebase/firestore";
import {ref, uploadBytes ,listAll, getDownloadURL,file} from "firebase/storage"


const ReportNewTrashScreen = () => {
  const [users, setUsers] = useState([]);
 
  const cardCollectionRef = collection(db, "card");
  
  

  useEffect(()=>{
    Geolocation.getCurrentPosition(info => {

      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
    const getUsers = async () => {
      const data = await getDocs(cardCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();

  },[])

  // console.log(users)
  const cards = [
    {
      status: 'EMPTY',
      icon: 'emoticon-happy-outline',
      themeColor: COLORS.darkGreen,
      value:"EMPTY BIN"
    },
    {
      status: 'FULL',
      icon: 'emoticon-confused-outline',
      themeColor: COLORS.blue,
      value:"FULL BIN"
    },
    {
      status: 'OVERFLOWING',
      icon: 'emoticon-angry-outline',
      themeColor: COLORS.red,
      value:"OVERFLOWING BIN"
    },
    {
      status: 'UNSURE',
      icon: 'emoticon-neutral-outline',
      themeColor: COLORS.pink,
      value:"UNSURE"
    },
  ];

  const [active, setActive] = useState(-1);
  const [userImage, setUserImage] = useState('');
  const [imageActive, setImageActive] = useState(false);
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [firstName,setFirstName] = useState("");
  const [quater,setQuater] = useState("");
  const [town,setTown] = useState("");


  let data ={coordinates : new GeoPoint(latitude,longitude)}


  // ImagePicker.openPicker({
  //   width: 300,
  //   height: 400,
  //   cropping: false
  // }).then(image => {
  //   console.log(image);
  // setUserImage(image.path);
  // setImageActive(true);
  // });

  const UploadImage = () => {
    ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: false
  }).then(image => {
    console.log(image);
  setUserImage(image.path);
  setImageActive(true);

  console.log(userImage.split("Pictures/"));


  });

  
 
 

 



  // ImagePicker.openCamera({
      
    //   cropping: false,
    // }).then(image => {
    //   setUserImage(image.path);
    //   setImageActive(true);
    // });
  };

   console.log(userImage);

   const uploadReport = async () => {

    const imageToFirebase=userImage.split("Pictures/")
    const  onlyImage= imageToFirebase[1]?.replace(/[^A-Za-z]+/g, '').slice(0, 5)
    const  lastjpg= imageToFirebase[1]?.substr(-4, 4)
    const combinedImg=onlyImage + lastjpg

    console.log("my combined img is",combinedImg);
    const metadata = {
     contentType: 'image/jpeg',
   };
 
   const cardCollectionRef = collection(db, "card")
   const imageRef= ref(storage,`images/${combinedImg + uuid.v4()}`)
   
   uploadBytes(imageRef,combinedImg,metadata).then((snapshot)=>{
     getDownloadURL(snapshot.ref).then( async  (url) => {
       console.log("image from website",url)
       await addDoc(cardCollectionRef, { url, firstName, coordinates:data.coordinates , status:cards[active].value,timestamp: serverTimestamp() ,quater,town});
       setUserImage("");
       setLatitude("")
       setLongitude("")
       setFirstName("")
       setQuater("")
       setTown("");
       setImageActive(false);
       setActive(-1);
     });
 })
   }
    

  const onPressCard = value => {
    setActive(value);
  };
  // var icon = userImage
  // ? require(userImage)
  // : require("./agri.jpg")sss
  //console.log(cards[active]?.status)

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      {imageActive ? (
        <View style={styles.ImageContainer}>
          <Image
            style={{width: '85%', height: '86%', justifyContent: 'center'}}
            source={{uri: userImage}}
          />
        </View>
      ) : (
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
      )}

      <View style={styles.formContainer} >

     
        <TextInput 
         value={firstName}
         onChangeText={name => setFirstName(name)}
         placeholder={'Full Name'}
         style={styles.TextInput}
         placeholderTextColor={'#000000'}
        />

    

     
      <TextInput
       value={town}
       onChangeText={twn => setTown(twn)}
       placeholder={'Town'}
       style={styles.TextInput}
       placeholderTextColor={'#000000'}
      />
     

      
      <TextInput
      value={quater}
      onChangeText={quat => setQuater(quat)}
      placeholder={'Quater'}
      style={styles.TextInput}
      placeholderTextColor={'#000000'}
      />
     

      </View>

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
        <SubmitButton uploadReport={uploadReport}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flexDirection:"column",
    // justifyContent:"center",
    // // flex: 1,
    paddingBottom: 200,

    backgroundColor: "white",
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
    marginTop: 15,
  },
  statusTrashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ImageContainer: {
    height: PHONE.height / 2.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: '40%',
    height: '50%',
    resizeMode: 'contain',
  },
formContainer:{
  height:PHONE.height/2.9,
  justifyContent: 'center',
  alignItems: 'center',
  
  

},
TextInput: {
  width:"90%",
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 10,
  marginTop: 20,
  height: 52,
  color: '#000',
  paddingLeft: 5,
}

});
export default ReportNewTrashScreen;

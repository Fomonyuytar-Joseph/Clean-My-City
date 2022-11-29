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
  
  


  // console.log(users)

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
<Text>Hello</Text>
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

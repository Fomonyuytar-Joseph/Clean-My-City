import { View, Text ,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import {React,useEffect,useState} from 'react'
import COLORS from '../../consts/colors'
import PHONE from '../../consts/phoneDimensions'
import Reportcard from '../components/Reportcard'
import { db } from '../../../Firebase/firebase'
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";


const ReportTrashScreen = () => {

  const cardCollectionRef = collection(db, "card");
  // console.log(cardCollectionRef)
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getCardData = async () => {
      const data = await getDocs(cardCollectionRef);
      setPostData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCardData();
  }, []);

//  console.log(postData.map((doc)=>{doc.url}))

 

  return (
   
        <ScrollView contentContainerStyle={styles.MainContainer}>
    {  postData.map((doc, index) => {
      return (
        <Reportcard url={doc.url} timestamp={doc.quarter} status={doc.status} date={doc.date} key={index}/>

      )
})

}
        
       </ScrollView>
   
  )
}

const styles =StyleSheet.create({
    MainContainer:{
       
        flexDirection:"row",
        backgroundColor:"white",
       justifyContent:"center",
        flexWrap: 'wrap',
        paddingBottom: 85,
        paddingTop:10
    }
})

export default ReportTrashScreen
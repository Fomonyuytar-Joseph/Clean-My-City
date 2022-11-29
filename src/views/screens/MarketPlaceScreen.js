import { View, Text ,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import {React,useState,useEffect} from 'react'
import PostCard from '../components/PostCard'
import { db } from '../../../Firebase/firebase'
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc
} from "firebase/firestore";
const MarketPlaceScreen = () => {
  const [postData,setPostData]= useState([])

  const postCollectionRef = collection(db, "post");

  useEffect(()=>{
    const getPostData = async () => {
      const data = await getDocs(postCollectionRef);
      setPostData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPostData();

  },[])

  console.log(postData)
  return (
    <ScrollView contentContainerStyle={styles.MainContainer}>
     {  postData.map((doc, index) => {
      return (
        <PostCard title={doc.title} description={doc.description} price={doc.price} image={doc.image} category={doc.category} key={index}/>

      )
})

}
    </ScrollView>
  )
}

const styles= StyleSheet.create({
   
  MainContainer:{
       
    flexDirection:"row",
    backgroundColor:"white",
   justifyContent:"center",
   alignItems:"center",
    flexWrap: 'wrap',
    paddingBottom: 85,
    paddingTop:10
}

})

export default MarketPlaceScreen
import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import COLORS from '../../consts/colors'

const SubmitButton = () => {
  return (
    <TouchableOpacity style={styles.Button}>
      <Text style={styles.ButtonText}>Submit Button</Text>
    </TouchableOpacity>
  )
}

const styles =StyleSheet.create({
    Button: {
        width: '90%',
        height: 40,
       backgroundColor: COLORS.black,
        borderRadius: 5,
        marginLeft: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ButtonText: {
        // color:"#fff",
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.white,
       
      },
})

export default SubmitButton
import React, { useState,useEffect} from 'react';
import{Button,StyleSheet,TextInput,View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

 const STORAGE_KEY = '@save_age'
 const App =()=> {
 
    const [age, setAge] = useState('')
    const saveData = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, age)
          alert('Data successfully saved')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
    const readData = async () => {
        try {
          const userAge = await AsyncStorage.getItem(STORAGE_KEY)
      
          if (userAge !== null) {
            setAge(userAge)
          }
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
    }
    const clearStorage = async () => {
        try {
          await AsyncStorage.clear()
          alert('Storage successfully cleared!')
        } catch (e) {
          alert('Failed to clear the async storage.')
        }
    }
    const onChangeText = userAge => setAge(userAge)

    const onSubmitEditing = () => {
        if (!age) return 
        saveData(age)
       
        setAge('')
    }
    useEffect(() => {
    readData()
    }, [])
    return(
      <View style={styles.container}>
          <TextInput style={styles.textInput} value={age}
          placeholder='Enter your age' onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}/>
          <Button title='Clear' onPress={clearStorage}/>
          <Text style={styles.text}>Your age is {age}</Text>
      </View>
    );

};

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
    },
    textInput:{
        borderColor:'grey',
        borderWidth:1,
        width:150,
        marginBottom:30,
    },
    text: {
        fontSize: 24,
        padding: 10,
        backgroundColor: '#dcdcdc'
    },
})
export default App;
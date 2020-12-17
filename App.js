import React from 'react';
import axios from 'axios';
import {Text,FlatList,View, StyleSheet,ActivityIndicator} from 'react-native'

export default class Requests extends React.Component {
    constructor()
    {
      super ()
      this.state = {
        nameList:[],
        isLoading:true,      }
    }

    async componentDidMount(){
        const  response = await axios.get('https://reactnative.dev/movies.json');
        const datas = await response.data.movies;
        this.setState({nameList:datas})
        console.log(this.state.nameList)
        console.log(this.state.isLoading)
        console.log(this.state.nameList.length)
        
    }

    render() {
        const { nameList, isLoading } = this.state;
        return (
           
            <View styles={styles.container}>
            {isLoading?(
                <FlatList
                data={nameList}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    
                    <Text>id: {item.id},   Name :  {item.title},    ReleaseYear:  {item.releaseYear}</Text>
                )}
                />
                ) :<Text>NO DATA</Text>
            }
            </View>
     
        );
    }
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        flex: 1,
    },
});
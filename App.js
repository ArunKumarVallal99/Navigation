
import React, { Component } from 'react';

import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

class App extends Component {
    state={
        data:'',
        post:'',
        multi1:'',
        isloading:true,
    }
    //Synch
   getDataUsingSync = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert('Finally called');
      });
  };
//Async
 getDataUsingAsync = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      this.setState({data:JSON.stringify(response.data)})
      alert(JSON.stringify(response.data));
    } catch (error) {
      alert(error.message);
    }
  };

 async postDataUsingAsync () {
    try{
        const response=axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
     const data=JSON.stringify((await response).data);
        //this.setState({post:JSON.stringify((await response).data)})
     
        alert(JSON.stringify((await response).data));
        
        
    }    
      catch(error) {
        alert(error.message);
      };
      //console.log(data);
      //this.setState({post:data});
  };

   multipleRequestsInSingleCall = () => {
       //const data='';
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
              //data=JSON.stringify(response.data);
            console.log('Post 1 : ' + JSON.stringify(response.data));
            
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            //alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
        alert('Both requests are now complete');
        }),
      );
    //  this.setState({multi1:data});
  };
render(){
  return (
  <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
     Axios 
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.getDataUsingSync}>
        <Text>Sync Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.getDataUsingAsync}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.postDataUsingAsync}>
        <Text>Post Data Using Async Await</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={this.multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginTop: 18}}>
            {this.state.data} 
      </Text>
      <Text style={{textAlign: 'center', marginTop: 18,margin:30,}}>
            {this.state.post} 
      </Text>
    </View>
    </ScrollView>
  );
}
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default App;
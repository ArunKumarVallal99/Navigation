import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Details(props) {

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Detail Screen</Text>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
    card: {
      width: 350,
      height: 100,
      borderRadius: 10,
      backgroundColor: 'white',
      margin: 10,
      padding: 10,
      alignItems: 'center'
    },
    cardText: {
      fontSize: 18,
      color: 'black',
      marginBottom: 5
    }
  });

export default Details;
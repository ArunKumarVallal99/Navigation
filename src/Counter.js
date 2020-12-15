import React, { Component } from 'react';
import { Text, View, StyleSheet ,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';

class Counters extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={this.props.increaseCounter}>
            <Text style={styles.touchableText}>ID</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{this.props.counter}</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counters);

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textView:{
    flexDirection: 'row',
  },
  touchableText:{
      fontSize:20,
  },
  number:{
      fontSize:20,
      paddingLeft:10,
  },
});
//import React from 'react';
import { TextInput, View, StyleSheet ,Button, FlatList,Text, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from "./store/action";

const TodoApp = ({ todo_list, addTodo, deleteTodo }) => {
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    
    if(task==''){
    alert('Cannot be Empty')
    }
    else{
      console.log(task)
      addTodo(task)
    }
    setTask('')
  }

  const handleDeleteTodo = (id,task) => {
    //console.log(id)
    alert('Deleted task is ' + task)
    deleteTodo(id)
  }

  const renderingItem=({item})=>{
    //console.log(item.task)
    return(
      <View style={styles.mainContainer}>

        <View style={styles.taskContainer}>

          <Text style={styles.taskTitle}> # TASK</Text>

          <View style={styles.taskTextContainer}>
              <Text style={styles.taskText}>{item.task}</Text>
              <TouchableOpacity onPress={()=>handleDeleteTodo(item.id,item.task)}>
                <Text style={styles.deleteText}>DELETE</Text>
              </TouchableOpacity>
          </View>

        </View>

      </View>
      )
  }

  return(
    <View style={styles.container}>
      <TextInput
      underlineColorAndroid='blue'
      placeholder='Example'
      value={task}
      label='TASk'
      onChangeText={task => setTask(task)}
      />

      <Button title ='ADD' onPress={handleAddTodo}>
        Add Task
      </Button>

      <FlatList
      data={todo_list} 
      renderItem={renderingItem}
      />

    </View>
  )
  
}


const styles = StyleSheet.create({
  container:{
    padding:20,
    
  },
  mainContainer:{
    elevation:7,
    backgroundColor:'white',
    paddingLeft:20,
    paddingRight:20,
  },
  taskContainer:{
    padding:10,
    margin:10,
    height:100,
    elevation:5,
    backgroundColor:'white',
    flexDirection:'column',
    borderRadius:10,
  },
  taskTitle:{
    fontSize:20,
    paddingBottom:10,
  },
  taskTextContainer:{
    flexDirection:'row',
    paddingLeft:10,
  },
  taskText:{
    width:200,
    fontSize:18,

  },
  deleteText:{
    color:'red',
  },

 
});
const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

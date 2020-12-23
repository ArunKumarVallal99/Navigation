//import React from 'react';
import { TextInput, View, StyleSheet ,Button, FlatList,Text, TouchableOpacity, Alert, Modal, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo ,editTodo} from "./store/action";

const TodoApp = ({ todo_list, addTodo, deleteTodo, editTodo}) => {
  const [task, setTask] = useState('');
  const [isModalVisible,setModalVisible]=useState(false);
  const [isEditableVisible,setEditableVisible]=useState(false);
  const intialvalue=[{id:'',task:''}]
  const [editTask,setEditTask]=useState('');
  const [editId,setEditId]=useState(0);
  const handleAddTodo = () => {
    
    if(task==''){
    alert('Cannot be Empty')
    }
    else{
      setModalVisible(false)
     // console.log(task)
      addTodo(task)
    }
    setTask('')
  }

  const handleDeleteTodo = (id,task) => {
    //console.log(id)
    alert('Deleted task is ' + task)
    deleteTodo(id)
  }
const handelEditTodo =()=>{
  setEditableVisible(false)
  alert(editId + editTask)
  editTodo(editId,editTask)
  
}

  const openEdit=(Id,editValue)=>{
   console.log('data  ->  '+editValue)
   setEditId(Id);
   setEditTask(editValue);
    console.log('ID  -> ' +Id);
    setEditableVisible(true);
  }
  const openModal=()=>{
    setModalVisible(true);
  }
  const renderingItem=({item})=>{
    //console.log(item.task)
    const data=item;
   // console.log(data);
    return(
      <View style={styles.mainContainer}>

        <View style={styles.taskContainer}>

          <Text style={styles.taskTitle}> # TASK</Text>

          <View style={styles.taskTextContainer}>
              <View style={styles.textContainer}>
              <Text style={styles.taskText}>{item.task}</Text>
              </View>
              <View style={styles.customiserContainer}>
              <TouchableOpacity onPress={()=> openEdit(data.id,data.task)
              //console.log(data)}
              }>
                <Text style={styles.EditableText}>EDIT</Text>
              </TouchableOpacity>
              <Modal transparent={true}  
                visible={isEditableVisible} 
                animationType='slide'
              >
                
                <View style={styles.modalContentWrapper}>
                
                  <TextInput
                  underlineColorAndroid='blue'
                  placeholder='TASK'
                  value={editTask}
                  label='TASk'
                  onChangeText={value=> setEditTask(value)}
                  />

                  <Button title ='ADD' onPress={handelEditTodo}>
                    Add Task
                  </Button>
                  <TouchableOpacity style={styles.cancel} onPress={()=>setEditableVisible(false)}>
                  <Text style={{color:'red'}}> Cancel </Text>
                  </TouchableOpacity>

                </View>

              </Modal> 

              <TouchableOpacity onPress={()=>handleDeleteTodo(item.id,item.task)}>
                <Text style={styles.deleteText}>DELETE</Text>
              </TouchableOpacity>
              </View>
          </View>

        </View>

      </View>
      )
  }

  return(
    
    <View style={styles.container}>
     
      <SafeAreaView style={styles.contentContainer}>
        <Text  style={{fontSize:20,marginLeft:110,}}>LIST OF TASK</Text>
        <View  style={styles.flatListContainer}>
        <FlatList
        data={todo_list} 
        renderItem={renderingItem}

        />
        </View>
        
        <TouchableOpacity style={styles.newTouch}onPress={openModal}>
          <Text style={{fontSize:40,color:'blue'}}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Modal transparent={true}  
        visible={isModalVisible} 
        animationType='slide'
      >
        
        <View style={styles.modalContentWrapper}>
        
          <TextInput
          underlineColorAndroid='blue'
          placeholder='TASK'
          value={task}
          label='TASk'
          onChangeText={task => setTask(task)}
          />

          <Button title ='ADD' onPress={handleAddTodo}>
            Add Task
          </Button>
          <TouchableOpacity style={styles.cancel} onPress={()=>setModalVisible(false)}>
          <Text style={{color:'red'}}> Cancel </Text>
          </TouchableOpacity>

        </View>

      </Modal> 
    </View>
  )
  
}


const styles = StyleSheet.create({
  container:{
    padding:20,
    display:'flex',
    flex:1,
    
  },
  contentContainer:{
    display:'flex',
    flex:1,
  },
  flatListContainer:{
    flex:1,
  },
  mainContainer:{
    //elevation:7,
    //backgroundColor:'white',
    //paddingLeft:20,
    //paddingRight:20,
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
  textContainer:{
    marginRight:20,
  },
  taskText:{
    width:200,
    fontSize:18,

  },
  customiserContainer:{
    flexDirection:'column',
  },
  EditableText:{
    color:'blue',
  },
  deleteText:{
    color:'red',
  },
  newTouch:{
    marginLeft:320,
    color:'blue',
  },
  modalContentWrapper:{
    backgroundColor:'white',
    height:10,  
    flex: .5,
    justifyContent: "center",
   // alignItems: "center",
    //margin:20,
    marginTop:200,
    marginLeft:20,
    marginRight:20,
    padding:20,
    elevation:5,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
  cancel:{
    marginTop:20,
    marginLeft:260,
  },
 
});
const mapStateToProps = (state, ownProps) => {
  return {
    todo_list: state.todo_list,
  }
}

const mapDispatchToProps = { addTodo, deleteTodo , editTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)

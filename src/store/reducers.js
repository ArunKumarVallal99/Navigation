import {ADD_TODO,DELETE_TODO, EDIT_TODO } from "./actionTypes";
const initialState={
    todo_list:[]
};
export const mainReducer =(state= initialState, action)=>{
switch(action.type){
    case ADD_TODO:{
        const { id, task } = action.payload
        console.log(state.todo_list)
        return{...state,todo_list: [...state.todo_list, { id , task }]};
        
    }
    case DELETE_TODO:{
        console.log(state.todo_list)
        const { id }=action.payload
        
        return{
            ...state,
            todo_list: state.todo_list.filter((index)=>index.id !=id)
            }
    }
    case EDIT_TODO:{
        console.log(state.todo_list.map(todo =>
            todo.id === action.id ?
            { ...todo, task:action.task  } :
              todo
          ))
        return {...state,
            todo_list:state.todo_list.map(todo =>
            todo.id === action.id ?
              { ...todo, task:action.task  } :
              todo
          )
        }
    
        //return{...state, todo_list[state.todo_list.findIndex(index=>index.id==id)]:task}
    }
    default:
        return state;
}
};  
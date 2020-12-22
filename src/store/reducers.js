import {ADD_TODO,DELETE_TODO } from "./actionTypes";
const initialState={
    todo_list:[]
};
export const mainReducer =(state= initialState, action)=>{
switch(action.type){
    case ADD_TODO:{
        const { id, task } = action.payload
        return{...state,todo_list: [...state.todo_list, { id , task }]};
    }
    case DELETE_TODO:{
        const { id }=action.payload
        return{
            ...state,
            todo_list: state.todo_list.filter((index)=>index.id !=id)
            }
    }
    default:
        return state;
}
};  
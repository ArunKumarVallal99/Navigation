import { ADDITION } from "./actionTypes";
const initialState={
counter :0,
name:'Arun Kumar',
};
export const mainReducer =(state= initialState, action)=>{
switch(action.type){
    case ADDITION:
        return{...state,counter:state.counter+1};
    default:
        return state;
}
};
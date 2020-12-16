import React, { Component } from 'react';
import Counters from './src/Counter';
import {Provider} from 'react-redux';
import {store} from "./src/store/store";
 const App =(props)=> {

    return(
        <Provider store= {store}>    
        <Counters />
        </Provider> 
    );

};
export default App;
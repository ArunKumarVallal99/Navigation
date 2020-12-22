import {Provider} from 'react-redux';
import TodoAPP from './src/TodoApp';
import * as React from 'react';
import {store} from './src/store/store';
const App=(props)=>{
  return(
    <Provider store={store}>
      <TodoAPP/>
    </Provider>
  );
}
export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Component/Main/index';
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import { reducer } from "./reducer/reducer";
const store = createStore(reducer,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
  );
}

export default App;

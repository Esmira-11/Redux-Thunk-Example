import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import todoReducer from './store/slices/todoSlice.js'
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { applyMiddleware} from 'redux';
import { Provider } from 'react-redux';


const store = configureStore({
  reducer:{
    todoReducer: todoReducer
  }
}, applyMiddleware(logger))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
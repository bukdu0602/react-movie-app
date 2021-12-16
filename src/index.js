import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// redux redux
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import userReducer from "./features/storage"

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
// until here redux

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>   
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

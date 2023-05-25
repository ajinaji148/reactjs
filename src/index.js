import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Myfirstcomponent } from './App';
// import Withcustomhook from './customhook'
// import { Routing} from './route';
import { Ajin } from './testing';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 


  <React.StrictMode>
    {/* <App /> */}
    {/* <Myfirstcomponent/> */}
    {/* <Withcustomhook/> */}
    {/* <Form/> */}
    {/* <Routing/> */}
    <Ajin/>
   
   </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDObidmK5md0e4WmxWjrikMhMAVLNvCQ4k",
  authDomain: "cart-6b56f.firebaseapp.com",
  databaseURL: "https://cart-6b56f.firebaseio.com",
  projectId: "cart-6b56f",
  storageBucket: "cart-6b56f.appspot.com",
  messagingSenderId: "772169290876",
  appId: "1:772169290876:web:9a7d4a18004a7ce47925f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render( <App />, document.getElementById('root')
);
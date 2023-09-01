import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr5wK6aMo0cYmWz2D_YePd0K05W__GtVA",
  authDomain: "react-heavy-fitness.firebaseapp.com",
  projectId: "react-heavy-fitness",
  storageBucket: "react-heavy-fitness.appspot.com",
  messagingSenderId: "599608073838",
  appId: "1:599608073838:web:ef8988c153ae606087507f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )


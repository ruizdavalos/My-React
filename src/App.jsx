

import Header from './componentes/Header'
import { Main } from './componentes/Main'
import Footer from './componentes/Footer'

import { BrowserRouter } from 'react-router-dom'
import './styles.scss'
import { MiContexto } from './componentes/MiContexto'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHiNkAp21Pvn5pYf94U00F1STFSFUYwAM",
  authDomain: "proyectojuanruiz.firebaseapp.com",
  projectId: "proyectojuanruiz",
  storageBucket: "proyectojuanruiz.appspot.com",
  messagingSenderId: "821894967136",
  appId: "1:821894967136:web:9c6beaff254a4a1a3f3805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const App = ()  => {

  return ( 
    <BrowserRouter>
      <MiContexto>
        <Header/>
        <Main/>
        <Footer/>
      </MiContexto>
    </BrowserRouter>
  )
}

export default App



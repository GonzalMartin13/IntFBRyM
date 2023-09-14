import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState , useEffect} from "react";
import React from 'react';
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error404/Error';
import LoginForm from './components/login/Login';


function App() {
const navigate = useNavigate();
const EMAIL = 'gonzalo@gmail.com';
const PASSWORD = 'G159875321';

const [access, setAccess] = useState(false);
const [characters, setCharacters] = useState([])

function login(user) {
   if (user.password === PASSWORD && user.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access],);


const onSearch = (id) => {
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(({ data }) => {
      const repetidos = characters.filter(char => id === char.id)
      if (repetidos) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      } 
   });

}

function onClose(id){
   const charactersFiltrados = characters.filter(character => character.id !== Number(id))
   setCharacters(charactersFiltrados)
}

function random (){
   const numeroAleatorio = Math.random() * 825;
   const idAleatorio = Math.ceil(numeroAleatorio) + 1;
   return onSearch(idAleatorio)
}

const location = useLocation()

   return (
      <div className = 'App'>

         {location.pathname !== "/" && (<Nav onSearch = {onSearch} random={random}/>)}


         <Routes> 

            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<LoginForm login={login}/>}/>
            <Route path="/home" element={<Cards className="" characters = {characters} onClose = {onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
         
      </div>
   );
}

export default App;

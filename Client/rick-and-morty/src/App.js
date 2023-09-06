import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from "react";
import React from 'react';
import axios from "axios";
import {Routes, Route, useLocation} from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error from './components/Error404/Error';
import LoginForm from './components/login/Login';

function App() {

const [characters, setCharacters] = useState([])

const onSearch = (id) => {
   axios("http://localhost:3001/rickandmorty/character/${id}")
   .then(({ data }) => {
      if (data.name) {
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
            <Route path='/' element={<LoginForm/>}/>
            <Route path="/home" element={<Cards characters = {characters} onClose = {onClose} />}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path="*" element={<Error/>}/>
         </Routes>
{/*          <Cards characters = {characters} onClose = {onClose} /> */}
      </div>
   );
}

export default App;

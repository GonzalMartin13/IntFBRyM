import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Footer/footer"

export default function Detail() {
    const {id} = useParams();

    const [character, setCharacter] = useState({});
    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className="card text-center m-5 pt-2 bg-dark" data-bs-theme="dark">
            <h1 className="pt-2">{character.name} </h1>
            <img className="card-img-top" src={character.image} alt={character.id} /> 
            <div className="card-body text-success">
                <h4>Estado: {character.status}</h4>
                <h4>Especie: {character.species}</h4>
                <h4>Genero:  {character.gender}</h4>
                <h4>Origen: {character.origin?.name}</h4>
            </div>
            <hr />
            <Footer/>
        </div>
    );
}
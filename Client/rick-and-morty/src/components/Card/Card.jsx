import { Link } from "react-router-dom";

export default function Card(props) {
   const {characters, onClose} = props;
   return (
      <div>
         <button onClick={() => onClose(characters.id)}> NO </button>
         <Link to={`/detail/${characters.id}`}>
         <h2>Nombre: {characters.name} </h2>
         </Link>
         <h2>Estado: {characters.status}</h2>
         <h2>Especie: {characters.species}</h2>
         <h2>Genero:  {characters.gender}</h2>
         <h2>Origen: {characters.origin.name}</h2>
         <img src={characters.image} alt={characters.id} /> 
      </div>
   );
}

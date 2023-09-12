import { Link } from "react-router-dom";

export default function Card(props) {
   const {characters, onClose} = props;
   return (
      <div className="card text-center my-1 col-3 col-g-6 pt-2 bg-dark" data-bs-theme="dark">
         <img src={characters.image} className="card-img-top" alt={characters.id}></img>
         <div className="card-body text-success">
            <Link to={`/detail/${characters.id}`} className="card-title"> <h2> {characters.name} </h2> </Link>
            <p className="card-text">
               <h4>Estado: {characters.status}</h4>
               <h4>Especie: {characters.species}</h4>
               <h4>Genero:  {characters.gender}</h4>
               <h4>Origen: {characters.origin.name}</h4>
            </p>
            <div className="">
               <button className="btn focus-ring focus-ring-light btn-outline-success m-1 col-md-6" onClick={() => onClose(characters.id)}> Add 💝  </button>
               <button className="btn focus-ring focus-ring-light btn-outline-success m-1 col-md-6" onClick={() => onClose(characters.id)}> X  </button>
            </div>  
         </div>
      </div>

   );
}
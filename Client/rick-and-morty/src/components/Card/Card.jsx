import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../Redux/actions";
import {connect } from "react-redux";
import { useState } from "react";

function Card(props) {

   const [fav, setFav] = useState(false)

   const {characters, onClose, addFavorite, removeFavorite, favs} = props;
   
   function handleFav(characters){
      if (!fav){
         addFavorite(characters)
         setFav(true)
      }else {
         removeFavorite(characters)
         setFav(false)
      }
   }

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
            {
               fav  ? (
                  <button className="btn focus-ring focus-ring-light btn-outline-success m-1 col-md-6" onClick={handleFav(characters.id)}>❤️</button>
               ) : (
                  <button className="btn focus-ring focus-ring-light btn-outline-success m-1 col-md-6" onClick={handleFav(characters)}>🤍</button>
               )
            }
               <button className="btn focus-ring focus-ring-light btn-outline-success m-1 col-md-6" onClick={() => onClose(characters.id)}> X  </button>
            </div>  
         </div>
      </div>

   );
}

const mapStateToProps = (state) =>{
   return{
      favs: state.myFavorite
   }
}

const mapDispatchToProps = (dispatch) =>{
   return{
      addFavorite: (characters) => dispatch(addFavorite(characters)),

      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
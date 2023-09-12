import {useState} from "react"
import { Link } from "react-router-dom";
export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId (event.target.value,)
   }
   return (
      <div className="d-flex">
         <input placeHolder="Ingrese un ID (1 al 826)" className="form-control " type='search' onChange = {handleChange} value = {id} />
         <Link to="/home">
            <button className="btn focus-ring focus-ring-success btn-outline-success mx-3" onClick={() => onSearch(id)}>Agregar</button> 
         </Link>
      </div>
   );
}

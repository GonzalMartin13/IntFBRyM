import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch, random}) {

    return (
        <div>
            <Link to="/about"> <button>Sobre Yo</button></Link>
            <Link to="/home"><button>Home</button></Link>
            <img src="./logoRyM.jpg" alt="LogoRickAndMorty" />
            <SearchBar onSearch = {onSearch}/>
            <button onClick={random}>Agregar Random PJ</button>
        </div>
    );
}
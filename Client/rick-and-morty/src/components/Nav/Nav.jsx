import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch, random}) {

    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand"> <img src="logoRyM.jpg" alt="LogoRickAndMorty" /> </Link>
    <div className="d-flex aling-center">
            <SearchBar onSearch = {onSearch}/>
            <button className="btn btn-outline-success focus-ring focus-ring-success mx-2" onClick={random}>Agregar Random PJ</button>
        </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ordenar
          </a>
          <ul className="dropdown-menu">
            <li>Menor a Mayor</li>
            <li>Genero</li>
            <li>Favoritos 💘 </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Me</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    );
}
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <div className="card text-center footer bottom bg-dark text-success">
            <div className="card-body">
                <h5 className="card-title">Proyecto Integrador M2 y M3</h5>
                <p className="card-text">Aplicacion creada con React-Redux y Express por Gonzalo Martin para Henry.</p>
                <Link to="/about" className="btn btn-outline-success">Mas sobre Gonza</Link>
            </div>
        </div>
     );
}

export default Footer;
import { useState } from "react";
import { validateEmail , validatePassword } from "./validate";
import {Link} from "react-router-dom"

function LoginForm({login}) {
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        
        // Validar campos en tiempo real
        if (name === 'email') {
          setErrors({ ...errors, email: validateEmail(value) });
        } else if (name === 'password') {
          setErrors({ ...errors, password: validatePassword(value) });
        }
      };
      const handleSubmit = (e) => {
        e.preventDefault(user);   
        if(!errors.email && !errors.password){
            login(user)
        }else {
            alert("Ta todo mal")
        }
      };
    return ( 
        <div className="card m-5  pt-2 col-md-6 " data-bs-theme="dark">
        <h1 className="pt-2">Welcome to Rick and Morty </h1>
        <h4>La Rick-idex que capaz necesitabas</h4>
        <form type="submit" onSubmit={handleSubmit}>
            <div>
            <input className="mt-3" placeHolder="Usuario o Email" type="email" id="email" name="email" value={user.email} onChange={handleChange} />
      {errors.email && <div className="error">{errors.email}</div>}
            </div>
                {errors.email && <span>{errors.email}</span>}
            <div>
            <input className="my-3" placeHolder="Contraseña" type="password" id="password" name="password" value={user.password} onChange={handleChange} />
      {errors.password && <div className="error">{errors.password}</div>}
            </div>
            {errors.password && <span>{errors.password}</span>}
             <div className="mt-2">
                <Link to="/home">
                    <button className="btn btn-outline-success focus-ring focus-ring-success mx-2 my-3" type="submit"> Sing In </button>
                </Link>
            </div> 
        </form>
    </div>
    );
}

export default LoginForm;


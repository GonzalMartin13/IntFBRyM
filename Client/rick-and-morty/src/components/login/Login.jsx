import { useState } from "react";

function validate(user){
    let errors = {}
    if (!user.email){
        errors.mail = "ingresa el mail"
    }
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)){
        errors.mail = "Email invalido"
    }
    if (user.email.length > 35){
        errors.mail = "Invalid Mail"
    }
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(user.password)){
        errors.password = "Contraseña Incorrecta"
    }
    return errors;
}

function LoginForm() {
    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })

    function handleChange(event){
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })

        setErrors(validate({
            ...user,
            [event.target.name] : event.target.value
        }) 

        )
    }
    return ( 
        <div>
            <div><h1>Ingresa a la cuenta</h1></div>

            <form type="submit">
                <div>
                    <label>Usuario</label>
                    <input type="email" name="usuario"  value={user.email} onChange={handleChange}/>
                </div>
                {errors.email && <span>{errors.email}</span>}
                <div>
                    <label>Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}/>
                </div>
                {errors.password && <span>{errors.password}</span>}
                <button type="submit"> Sing In </button>
            </form>
        </div>
    );
}

export default LoginForm;
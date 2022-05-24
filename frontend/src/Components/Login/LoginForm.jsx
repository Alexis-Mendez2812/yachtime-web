import React,{ useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx"
import toast from "react-hot-toast";

export function validate(input) {
  let errors = {};
  console.log(errors);

  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.-*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }
  return errors;
}


export const LoginForm = () => {

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  
  const [errors, setErrors] = useState({});


  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSumbit = async (e) => {
    try {
      e.preventDefault();
      if (Object.keys(errors).length > 0) {
        toast.error("Debes completar correctamente los campos.");
      }
    
  
    } catch (e) {
      console.log(e);
      toast.error("Contraseña o usuario incorrecto.");
    }
  };



  return(
  <>


<Navbar/>
          <form onSubmit={handleSumbit} className="SignUpContainer">
            <label>Username</label>
            <input
              onChange={handleInputChange}
              value={input.username}
              placeholder="Email"
              type="text"
              name="username"
              className="input-usuario"
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <label>Contraseña</label>
            <input
              onChange={handleInputChange}
              value={input.password}
              placeholder="Password"
              type="password"
              name="password"
              className="input-usuario"
            />
            {errors.password && <p className="error">{errors.password}</p>}
            <button>Acceder</button>
            <hr className="linea"/>
           
            <div className="OR" style={{ position: "relative", top: "-1rem" }}>
              <Link className="link-to-signup" id="olv-ct" to={"/PasswordReset"}>
                ¿Olvidaste tu contraseña?
              </Link>

              <Link className="link-to-signup" id="register" to={"/SignUp"}>
                REGISTRARME
              </Link>
            </div>
          </form>


        <Link to="/">
          <button className="back_signUp">VOLVER</button>
        </Link>
    </>
    );
};
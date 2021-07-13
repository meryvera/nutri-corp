import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../firebase/auth";

export const Login = () => {
  let history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(form)
      const response = await loginUser(form.email, form.password);
      if(response) return history.push("/productos");
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <div className="logo">
        <img className="imagenLogo" alt="Nutri Market" src={logo}></img>
      </div>

      <div className="datosLogin">
        <div className="form-group">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Correo"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recuerdame
          </label>
        </div>
      </div>
      <div className="btnIngresar">
        <button type="submit" className="btn btn-primary btn-block">
          Ingresar
        </button>
      </div>
    </form>
  );
};

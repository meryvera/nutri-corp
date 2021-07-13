import React from "react";
import logo from "../../images/logo.jpg";

export const Login = () => {
  return (
    <form className="login">
      <div className="logo">
        <img className="imagenLogo" alt="Nutri Market" src={logo}></img>
      </div>

      <div className="datosLogin">
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Correo" />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
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

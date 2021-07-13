// import logo from 'img/logo.png';
// import login from 'img/logo.png';
import React from 'react';

const Login = () => {
    return (
  
    <form className="login">
        <img alt="Nutri Market" /* src={logo} */></img>

        <div className="form-group">
            <input type="email" className="form-control" placeholder="Correo" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Contraseña" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
        <p className="forgot-password text-right">
            Forgot <a href="/">password?</a>
        </p>
    </form>
  );
}

export default Login;

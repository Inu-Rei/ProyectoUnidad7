import React, { useState } from 'react';
import "../stylesheets/login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username === 'usuario' && password === 'clave') {
      navigate('/Listado');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="App">
     
        <form onSubmit={handleSubmit} >
        <section class="form-resgister">
          <label>
            Usuario:
            <input className='controls'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input className='controls'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Iniciar sesión</button>
          </section>
        </form>
      
    </div>
  );
}

export default Login;


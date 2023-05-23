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
    <div className="container">
      <section class="form-resgister">
        <form onSubmit={handleSubmit} >
          <div className='form_box' >
            <input className='form_input' id='textUser' placeholder=' ' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label for="" className='form_label' >USUARIO</label>
          </div>
          <div className='form_box' >
            <input className='form_input' id='textPass' placeholder=' ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label for="" className='form_label' >PASSWORD</label>
          </div>
                    <center><button type="submit">
                    Iniciar Sesion
                    </button></center>
        </form>
      </section>
    </div>
  );
}

export default Login;


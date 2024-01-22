import React from 'react'
import './css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import swal from 'sweetalert';

function Registrar() {
  const showAlert =()=>{
    swal({
      title: "USUARIO REGISTRADO",
      text : "(>‿◠)✌",
      icon: "success",
      button : "Aceptar"
    }).then(function(){
      window.location = "./login";
    })
  }

  return (
    <div className="fondo">
        <div className="containerPrincipal">
        <h1>Bienvenido</h1>
        <br/>
        <div className="containerSecundario">
            <div className="form-group">
            <label>Nombre Completo</label>
            <br/>
            <input type="text" className="form-control" id="name"/>
            <br/>
            <label>DNI</label>
            <br/>
            <input type="text" className="form-control" id="dni"/>
            <br/>
            <label>Direccion</label>
            <br/>
            <input type="text" className="form-control" id="address"/>
            <br/>
            <label>Email</label>
            <br/>
            <input type="text" className="form-control"id="email"/>
            <br/>
            <label>Contraseña</label>
            <br/>
            <input type="password" className="form-control" id="password"/> 
            <br/>         
            <button
                className="btn btn-primary"
                onClick={() => {
                  fetch("http://localhost:80/api/registro", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name: document.querySelector("#name").value,
                      dni: document.querySelector("#dni").value,
                      address: document.querySelector("#address").value,
                      email: document.querySelector("#email").value,
                      password: document.querySelector("#password").value,
                    }),
                  });
                  showAlert();
                }}
              >
                Registrarse
              </button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Registrar;
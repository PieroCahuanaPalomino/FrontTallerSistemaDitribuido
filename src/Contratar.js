import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./css/profile_contrato.css";
import image1 from "./assets/1.jpg";
import image2 from "./assets/contrato.jpg";
import swal from 'sweetalert';
import Contactos from "./Contactos";

function Contratar() {
  const location = useLocation();

  //ESTATICO SE TIENE QUE VOLVER DINAMICO
  var id_dueñoct = "62aa7d42959a6bde1d556a7a";
  var id_paseadorct = location.state.userId;
  var id_mascotact = "62aa7d42959a6bde1d556a7b";

  //AZURE.NET/api/owners
  const url3 = "http://localhost:80/api/owners";
  const [filtro, setFiltro] = useState();

  const url2 = "http://localhost:80/api/users";
  const [paseadores, setPaseador] = useState();

  const fetchApi = async () => {
    const response = await fetch(url3);
    const responseJSON = await response.json();

    const responsep = await fetch(url2);
    const responseJSONp = await responsep.json();

    setFiltro(responseJSON.filter((i) => i._id === id_dueñoct));
    setPaseador(responseJSONp.filter((i) => i._id === id_paseadorct));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const showAlert =()=>{
    swal({
      title: "Contratación exitosa",
      text : "(>‿◠)✌",
      icon: "success",
      button : "Aceptar"
    }).then(function(){
      window.location = "/";
    })
  }
  return (
    <div>
      <Contactos></Contactos>
      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
        <div className="card2 p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img
                src="https://i.imgur.com/wvxPV9S.png"
                height={100}
                width={100}
              />
            </button>
            {!filtro
              ? "Cargando..."
              : filtro.map((dueño) => (
                  <>
                    <span className="name mt-3">{dueño.name}</span>
                    <div className="text mt-3">
                      <span>DNI : {dueño.dni}</span>
                      <br></br>
                      <span>Direccion : {dueño.address}</span>
                      <br></br>
                      <span>Email : {dueño.email}</span>
                      <br></br>
                    </div>
                  </>
                ))}

            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined May,2021</span>
            </div>
          </div>
        </div>

        <center>
          <div>
            <img src={image2} height={100} width={100} />
            <div className=" d-flex mt-2">
              <button
                className="btn1 btn-dark"
                onClick={() => {
                  fetch("http://localhost:80/api/transaction", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id_dogwalker: id_paseadorct,
                      id_dog: id_mascotact,
                      estado: "true",
                    }),
                  });
                  showAlert()
                }}
              >
                Contratar
              </button>
            </div>
            <div className=" d-flex mt-2">
              <a href="/paseadores">
                <button className="btn1 btn-dark">Volver</button>
              </a>
            </div>
          </div>
        </center>

        <div className="card2 p-4">
          <div className=" image d-flex flex-column justify-content-center align-items-center">
            <button className="btn btn-secondary">
              <img src={image1} height={100} width={100} />
            </button>
            {!paseadores
              ? "Cargando..."
              : paseadores.map((dueño) => (
                  <>
                    <span className="name mt-3">{dueño.name}</span>
                    <div className="text mt-3">
                      <span>DNI : {dueño.dni}</span>
                      <br></br>
                      <span>Direccion : {dueño.address}</span>
                      <br></br>
                      <span>Email : {dueño.email}</span>
                      <br></br>
                    </div>
                  </>
                ))}

            <div className=" px-2 rounded mt-4 date ">
              <span className="join">Joined May,2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contratar;

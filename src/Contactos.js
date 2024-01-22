import React from "react";
import "./css/style.css";

function Contactos() {
  return (
    <section>
      <body class="main-layout footer_to90 about_page">
        <header>
          <div class="header">
            <div class="header_top d_none1">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <ul class="conta_icon">
                      <li>
                        <a>Contactenos: 969 754 397</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <ul class="social_icon">
                      <li>
                        {" "}
                        <a href="#">
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                    <div class="se_fonr1">
                      <a class="nav-link" href="/login">
                        Login
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header_bottom">
              <div class="container">
                <div class="row">
                  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <nav class="navigation navbar navbar-expand-md navbar-dark ">
                      <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExample04"
                        aria-controls="navbarsExample04"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div
                        class="collapse navbar-collapse"
                        id="navbarsExample04"
                      >
                        <ul class="navbar-nav mr-auto">
                          <li class="nav-item ">
                            <a class="nav-link" href="/inicio">
                              Inicio
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/paseadores">
                              Paseadores
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="">
                              Servicios
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="/registromascotas">
                              Registrar Mascota
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="">
                              Contactenos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="col-md-4">
                    <div class="search">
                      <button type="submit" class="seach_icon">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </body>
    </section>
  );
}

export default Contactos;

import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import image1 from "./assets/1.jpg";
import Contratar from "./Contratar";
import Contactos from "./Contactos";


function Paseadores() {
  const url2 = "http://localhost:80/api/users";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    
    <div>
      <Contactos></Contactos>
      <section className="App">
        <div class="App">
          <div class="title">
            <h1>Nuestros Colaboradores</h1>
          </div>
          <div className="cards-content">
            <div className="row">
              {!todos
                ? "Cargando..."
                : todos.map((todo) => (
                    <div className="col-md-4" key={todo._id}>
                      <Card
                        imageSource={image1}
                        nameC={todo.name}
                        text={todo.puntaje}
                        id={todo._id}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paseadores;

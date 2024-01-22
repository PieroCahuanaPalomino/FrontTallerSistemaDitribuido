import React from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import "./card.css";


function Card({ imageSource, nameC, text, id }) {
  const nav = useNavigate();

  return (
    <div className="card">
      <div class="head">
        <div class="circle"></div>
        <div class="img">
          <img src={imageSource} alt="" />
        </div>
      </div>

      <div class="description">
        <h4 className="card-title">{nameC}</h4>
        <p className="card-text text-secondary">
          {text
            ? "Calificación: " + text
            : "Sin calificación"}
        </p>
      </div>

      <div class="contact">
        <button 
        className="btn"
        rel="noreferrer"
        onClick={() => {
          nav("/contratar",{state:{userId : id}})
        }}>
        Contactar con {nameC}
        </button>    
      </div>

    </div>
  );
}

Card.propTypes = {
  nameC: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Card;

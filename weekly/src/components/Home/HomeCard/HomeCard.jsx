import css from "./HomeCard.module.css";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomeCard({ album, artist, cover, albumId, id }) {

  return (
    <Link to={`/album/${albumId}`} className={css.link}>
      <div style={{maxWidth: "12rem"}}>
        <div>
          <img className="img-fluid"src={cover}/>
        </div>
        <div className={css.cardText}>
          <h4>{artist}</h4>
          <p>{album}</p>
        </div>
      </div>
    </Link>
  );
}

export default HomeCard;

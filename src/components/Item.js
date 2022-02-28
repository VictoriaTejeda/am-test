import React from "react";
import { useDispatch, useSelector } from "react-redux";
import{addFavorites, removeFavorites} from "../redux/actions"
import "../style/Item.scss";

export const Item = ({ character }) => {
  const favorites= useSelector((state)=>state.favorite);
  const dispatch=useDispatch()

  const addORDeleteFavorites=()=>{
   if(favorites.find((favorite) => favorite.id ===character.id)){
     dispatch(removeFavorites(character))
   }else{
     dispatch(addFavorites(character));
   }
  };

  return (
    <div className="container-item">
      <section className="container-card">
        <div className={`house ${character.house}`}>
          <img
            src={character.image}
            className="character"
            alt={character.name}
          />
        </div>
        <div className={`info ${character.alive}`}>
          <p>
            {character.alive === true ? "VIVO " : " FINADO"}/{" "}
            {character.hogwartsStudent === true
              ? "ESTUDIANTE"
              : character.hogwartsStaff === true
              ? "STAFF"
              : ""}{" "}
              <i className="bi bi-bookmark favorite-icon" onClick={addORDeleteFavorites}></i>
          </p>
          <h4 className="card-title">{character.name}</h4>

          <li>
            <strong>Cumpleaños: </strong>
            {character.dateOfBirth}
          </li>
          <li>
            <strong>Género: </strong>
            {character.gender}
          </li>
          <li>
            <strong>Color de ojos: </strong>
            {character.eyeColour}
          </li>
          <li>
            <strong>Color de pelo: </strong>
            {character.hairColour}
          </li>
        </div>
      </section>
    </div>
  );
};

import React from "react";
import { useDispatch } from "react-redux";
import{ removeFavorites} from "../redux/actions"


export const Myfavorite = ({fav,}) => {
  
  const dispatch=useDispatch();

  const removeFav=()=>{
    if(fav){
      dispatch(removeFavorites(fav))
    }
  }
  return (
    <>
      <li>
        <img className="photo" src={fav.image} alt="Favorito" /> {fav.name}
        <i className="bi bi-trash" onClick={removeFav}></i>
      </li>
      <hr />
    </>
  );
};

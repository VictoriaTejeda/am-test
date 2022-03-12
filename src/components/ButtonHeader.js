import React, { useState } from "react";

import { Modal } from "./Modal";
import {  useSelector } from "react-redux";

import { Myfavorite } from "./Myfavorite";


 export const ButtonHeader = () => {
  const [modalState, setModalState] = useState(false);
  const myFavorite=useSelector((store)=>store.favorites);

  return (
    <>
      <section className="container-btn-menu">
        <div className="dropdown">
          <button
            className="favorite-btn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            FAVORITOS
            <i className="bi bi-bookmark-fill"></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           {
             myFavorite.map((favorite)=>(
              <Myfavorite fav={favorite}  key={favorite.id} />
             ))
           }
          </ul>
          <button
            className="add-btn"
            onClick={() => {
              setModalState(true);
            }}
          >
            AGREGAR <i className="bi bi-person-plus-fill"></i>
          </button>
          <Modal modalState={modalState} setModalState={setModalState}></Modal>
        </div>
      </section>
    </>
  );
};




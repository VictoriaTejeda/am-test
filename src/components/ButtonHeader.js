import React, { useState } from "react";
import { Modal } from "./Modal";

export const ButtonHeader = () => {
  const [modalState, setModalState] = useState(false);
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
            <li>Action</li>
            <hr />
            <li>Another action</li>
            <hr />
            <li>Something else here</li>
          </ul>
          <button
            className="add-btn"
            onClick={()=>{setModalState(true)}}
          >
            AGREGAR <i className="bi bi-person-plus-fill"></i>
          </button>
          <Modal modalState={modalState} setModalState={setModalState}></Modal>
        </div>
      </section>
    </>
  );
};

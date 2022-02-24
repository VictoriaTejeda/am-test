import React from "react";
import "../style/Modal.scss";

export const Modal = ({ modalState, setModalState }) => {
  return (
    <>
      {modalState && (
        <section className="overlay">
          <div className="container-modal">
            <header>
              <i
                className="bi bi-x-circle"
                onClick={() => {
                  setModalState(false);
                }}
              ></i>
              <h1>Agrega un personaje</h1>
            </header>

            <form className="add-character">
              <div className="column">
                <label htmlFor="POST-name">NOMBRE</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-name"
                  name="name"
                ></input>
                <label htmlFor="POST-eyes">COLOR DE OJOS</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-eyes"
                  name="eyes-color"
                ></input>
                <label htmlFor="POST-house">CASA</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-house"
                  name="house"
                ></input>
                <label htmlFor="POST-patronus">PATRONUS</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-patronus"
                  name="patronus"
                ></input>
                <div className="container-radio-btn">
                  <label>GENERO</label>
                  <div>
                    <input
                      className="inputs"
                      type="radio"
                      value="Male"
                      name="gender"
                    />{" "}
                    Masculino
                    <input
                      className="inputs"
                      type="radio"
                      value="Female"
                      name="gender"
                    />{" "}
                    Femenino
                  </div>
                </div>
              </div>
              <div className="column">
                <label htmlFor="POST-birthday">CUMPLEAÑOS</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-birthday"
                  name="birthday"
                ></input>
                <label htmlFor="POST-hair">COLOR DE CABELLO</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-hair"
                  name="hair-color"
                ></input>
                <label htmlFor="POST-specie">ESPECIE</label>
                <input
                  className="input-add"
                  type="text"
                  id="POST-specie"
                  name="specie"
                ></input>
                <div className="container-radio-btn">
                  <label>VIVO</label>
                  <div>
                    <input
                      className="inputs"
                      type="radio"
                      value="true"
                      name="alive"
                    />{" "}
                    Si
                    <input
                      className="inputs"
                      type="radio"
                      value="false"
                      name="alive"
                    />{" "}
                    No
                  </div>
                </div>
                <div className="container-radio-btn">
                  <label >POSICIÓN</label>
                  <div>
                    <input
                      className="inputs"
                      type="radio"
                      value="hogwartsStudent"
                      name="role"
                    />{" "}
                    Estudiante
                    <input
                      className="inputs"
                      type="radio"
                      value="hogwartsStaff"
                      name="role"
                    />{" "}
                    Staff
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="POST-url-img">
                  URL DE LA FOTOGRAFIA DEL PERSONAJE
                </label>
                <input
                  className="img-input"
                  type="text"
                  id="POST-url-img"
                  name="url-img"
                  placeholder="https://static.wikia.nocookie.net/esharrypotter/images/2/2d/Dobby_el_elfo.PNG"
                ></input>
              </div>
              <button className="btn-add" type="submit">
                Guardar
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

import React from "react";
import { useAddCharacter } from "../hooks/useAddCharacter";
import "../style/Modal.scss";

export const Modal = ({ modalState, setModalState }) => {
  const {
    form,
    disable,
    disabled,
    handleSubmit,
    inputDisable,
    inputDisabled,
  } = useAddCharacter();


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
                  window.location.reload(true);
                }}
              ></i>
              <h1>Agrega un personaje</h1>
            </header>

            <form className="add-character" ref={form}>
              <div className="column">
                <label htmlFor="name">NOMBRE</label>
                <input className="input-add" type="text" name="name"></input>
                <label htmlFor="eyes-color">COLOR DE OJOS</label>
                <input
                  className="input-add"
                  type="text"
                  name="eyes-color"
                ></input>
                <label htmlFor="house">CASA</label>
                <input className="input-add" type="text" name="house"></input>
                <label htmlFor="patronus">PATRONUS</label>
                <input
                  className="input-add"
                  type="text"
                  name="patronus"
                ></input>
                <div className="container-radio-btn">
                  <label htmlFor="gender">GENERO</label>
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
                <label htmlFor="birthday">CUMPLEAÑOS</label>
                <input
                  className="input-add"
                  type="text"
                  name="birthday"
                ></input>
                <label htmlFor="hair">COLOR DE CABELLO</label>
                <input
                  className="input-add"
                  type="text"
                  name="hair-color"
                ></input>
                <label htmlFor="specie">ESPECIE</label>
                <input className="input-add" type="text" name="specie"></input>
                <div className="container-radio-btn">
                  <label htmlFor="alive">VIVO</label>
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
                  <label htmlFor="role">POSICIÓN</label>
                  <div>
                    <input
                      className="inputs"
                      type="radio"
                      value="true"
                      id="role"
                      name="hogwartsStudent"
                      disabled={disable}
                      onChange={inputDisabled}
                    />{" "}
                    Estudiante
                    <input
                      className="inputs"
                      type="radio"
                      value="true"
                      id="role"
                      name="hogwartsStaff"
                      disabled={disabled}
                      onChange={inputDisable}
                    />{" "}
                    Staff
                  </div>
                </div>
              </div>
              <div>
                <label className="url-img" htmlFor="url-img">
                </label>
                <input
                  className="img-input"
                  type="file"
                  name="url-img"
                  accept="image/png, image/jpeg"
                ></input>
              </div>
              <button
                className="btn-add"
                onClick={(event) => {
                  handleSubmit(event);
                }}
              >
                Guardar
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

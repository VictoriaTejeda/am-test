import React, { useRef } from "react";
import { useFilterData } from "../hooks/useFilterData";
import "../style/Modal.scss";

export const Modal = ({ modalState, setModalState }) => {
  const {allCharacters} = useFilterData();

  const form = useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      eyescolor: formData.get("eyes-color"),
      haircolor: formData.get("hair-color"),
      house: formData.get("house"),
      patronus: formData.get("patronus"),
      birthday: formData.get("birthday"),
      specie: formData.get("birthday"),
      gender: formData.get("gender"),
      alive: formData.get("alive"),
      role: formData.get("role"),
      url: formData.get("url-img"),
    };
    console.log(data);
  };

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
                  allCharacters()
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
                <label htmlFor="url-img">
                  URL DE LA FOTOGRAFIA DEL PERSONAJE
                </label>
                <input
                  className="img-input"
                  type="url"
                  name="url-img"
                  placeholder="https://static.wikia.nocookie.net/esharrypotter/images/2/2d/Dobby_el_elfo.PNG"
                ></input>
              </div>
              <button className="btn-add" onClick={handleSubmit}>
                Guardar
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

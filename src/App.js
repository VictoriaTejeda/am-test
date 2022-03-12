import React from "react";
import { connect } from "react-redux";
import { ButtonHeader } from "./components/ButtonHeader";
import { Characters } from "./components/Characters";
import { useFilterData } from "./hooks/useFilterData";
import Title from "./asset/image/Title.png";
import "./style/Item.scss";
import "./style/App.scss";

function App() {

  const {hogwartsCharacters, filterStudent, filterStaff, allCharacters}= useFilterData()
  

  return (
    <div className="App">
      <ButtonHeader/>
      <section className="init">
        <img src={Title} alt="logo-img" className="logo" onClick={() => {
              allCharacters();
            }} />
        <h1 className="indication"> Selecciona tu filtro</h1>
        <section className="container-btn-filter">
          <button
            className="studients btn btn-outline-primary"
            onClick={() => {
              filterStudent();
            }}
          >
            ESTUDIANTES
          </button>
          <button
            className="staff btn btn-outline-primary"
            onClick={() => {
              filterStaff();
            }}
          >
            STAFF
          </button>
        </section>
      </section>
      <Characters characters={hogwartsCharacters} />
    </div>
  );
}
 
const mapStateToProps=state=>{
return{
  characters:state.characters
}
}
export default connect(mapStateToProps,null) (App);

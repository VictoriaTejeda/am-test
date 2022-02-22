import React, {useState, useEffect } from "react";
import { ButtonHeader } from "./components/ButtonHeader";
import { Characters } from "./components/Characters";
import { useGetCharacters } from "./hooks/useGetCharacters";
import Title from "./asset/image/Title.png";
import "./style/App.scss";

function App() {
  const characters = useGetCharacters();
  const [hogwartsCharacters, sethogwartsCharaters]= useState(characters);
 
  const filterStudent = () => {
    const hogwartsStudents= characters.filter((p) => p.hogwartsStudent === true);
    sethogwartsCharaters(hogwartsStudents);
  };

  const filterStaff = () => {
    const hogwartsStaff= characters.filter((p) => p.hogwartsStaff === true);
    sethogwartsCharaters(hogwartsStaff);
  };

  useEffect(()=>{
    sethogwartsCharaters(characters);
  },[characters])

  return (
    <div className="App">
      <ButtonHeader />
      <section className="main-init">
        <img src={Title} alt="logo-img" className="logo" />
        <h1 className="indication"> Selecciona tu filtro</h1>
        <section>
          <button
            className="studients btn btn-outline-primary"
            onClick={()=>{filterStudent()
            }
          }
          >
            ESTUDIANTES
          </button>
          <button
            className="staff btn btn-outline-primary"
            onClick={()=>{filterStaff()}}
          >
            STAFF
          </button>
        </section>
      </section>
   <Characters characters={hogwartsCharacters}/>
    </div>
  );
}

export default App;

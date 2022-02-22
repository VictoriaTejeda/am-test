import React, {useState } from "react";
import { ButtonHeader } from "./components/ButtonHeader";
import { Characters } from "./components/Characters";
import { useGetCharacters } from "./hooks/useGetCharacters";
import Title from "./asset/image/Title.png";
import "./style/App.scss";

function App() {
  const characters = useGetCharacters();
  const [students, setStudents] = useState();
  const [staff, setStaff] = useState();
  const filterStudent = () => {
    return characters.filter((p) => p.hogwartsStudent === true);
  };
  console.log(students)
  const filterStaff = () => {
    console.log(characters.filter((p) => p.hogwartsStaff === true));
    return characters.filter((p) => p.hogwartsStaff === true);
  };
  return (
    <div className="App">
      <ButtonHeader />
      <section className="main-init">
        <img src={Title} alt="logo-img" className="logo" />
        <h1 className="indication"> Selecciona tu filtro</h1>
        <section>
          <button
            className="studients btn btn-outline-primary"
            onClick={()=>{setStudents(filterStudent);
            }
          }
          >
            ESTUDIANTES
          </button>
          <button
            className="staff btn btn-outline-primary"
            onClick={()=>{setStaff(filterStaff)}}
          >
            STAFF
          </button>
        </section>
      </section>
      {students ? <Characters characters={students} /> :<Characters characters={characters}/>}
    </div>
  );
}

export default App;

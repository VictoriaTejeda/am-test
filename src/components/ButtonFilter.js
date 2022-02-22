import React, { useState } from "react";
import { Characters } from "./Characters";
import { useGetCharacters } from "../hooks/useGetCharacters";
;

export const ButtonFilter = () => {
  const [ students, setStudents]= useState({})
  const data = useGetCharacters();

  const filterStudent = () => {
    const getStudent=data.filter((p) => p.hogwartsStudent === true);
    console.log(getStudent)
    return  getStudent;
  };
  

  const filterStaff = () => {
    return data.filter((p) => p.hogwartsStaff === true);
  };
  console.log(filterStaff());
  return (
    <>
      <section>
        <button
          className="studients btn btn-outline-primary"
          onClick={()=>{setStudents(filterStudent)}}
        >
          ESTUDIANTES
        </button>
        <button className="staff btn btn-outline-primary">STAFF</button>
      </section>
    </>
  );
};

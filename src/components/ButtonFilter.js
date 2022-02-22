import React from "react";
import { Characters } from "./Characters";
import { useGetCharacters } from "../hooks/useGetCharacters";
;

export const ButtonFilter = () => {
  const data = useGetCharacters();

  const filterStudent = () => {
    console.log( data.filter((p) => p.hogwartsStudent === true))
    return  data.filter((p) => p.hogwartsStudent === true);
  };

  const filterStaff = () => {
    console.log(data.filter((p) => p.hogwartsStaff === true))
    return data.filter((p) => p.hogwartsStaff === true);
  };
  return (
    <>
      <section>
        <button
          className="studients btn btn-outline-primary"
          onClick={()=>{
            data &&<Characters characters={filterStudent()}/>
          }}
        >
          ESTUDIANTES
        </button>
        <button className="staff btn btn-outline-primary" onClick={filterStaff}>STAFF</button>
      </section>
    </>
  );
};

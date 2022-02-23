import {useState, useEffect } from 'react'
import { useGetCharacters } from './useGetCharacters';

export const useFilterData = () => {
 const characters = useGetCharacters();

  const [hogwartsCharacters, sethogwartsCharaters]= useState([]);
 
  const filterStudent = () => {
    const hogwartsStudents= characters.filter((p) => p.hogwartsStudent === true);
    sethogwartsCharaters(hogwartsStudents);
  };

  const filterStaff = () => {
    const hogwartsStaff= characters.filter((p) => p.hogwartsStaff === true);
    sethogwartsCharaters(hogwartsStaff);
  };

  const allCharacters=()=>{
    sethogwartsCharaters(characters);
  }
  useEffect(()=>{
    sethogwartsCharaters(characters);
  },[characters]);

  return {
    hogwartsCharacters,
    filterStudent,
    filterStaff,
    allCharacters
  }
}

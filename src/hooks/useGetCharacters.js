import {useEffect, useState}from "react";
import { getCharacter } from "../service";

export const useGetCharacters = () => {
  const [character, setCharacter] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    const response = await getCharacter();
    setCharacter(response.data);
  }, []);
  return character;
};


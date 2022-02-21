import {useEffect, useState}from "react";
import axios from "axios";


export const useGetCharacters = ()=>{
    const [character, setCharacter] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (async()=>{
        const API='http://localhost:5000/characters';
        const response= await axios.get(API);
        setCharacter(response.data)
    },[]);
    return character;
};


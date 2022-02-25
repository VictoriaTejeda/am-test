import {useEffect, useState}from "react";
import axios from "axios";

const API='http://ec2-54-188-30-225.us-west-2.compute.amazonaws.com/characters'

export const useGetCharacters = ()=>{
    const [character, setCharacter] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (async()=>{
        const response= await axios.get(API);
        setCharacter(response.data)
    },[]);
    return character;
};

export const usePostCharacters = ()=>{
    const [character, setCharacter] = useState([]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (async()=>{
        const response= await axios.post(API);
        setCharacter(response.data)
    },[]);
    return character;
};

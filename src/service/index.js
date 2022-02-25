import axios from "axios";

const API =
  "http://localhost:5000/characters";

export async function getCharacter() {
  try {
    const response = await axios.get(API);
    return response;
  } catch (e) {
    console.log(e);
  }
}

 export async function saveCharacter() {
  await axios.post(API,{
    name: "",
    eyeColour:"",
    hairColour: "",
    house: "",
    patronus:"" ,
    dateOfBirth: "",
    species: "",
    gender: "",
    alive:"",
    hogwartsStaff:"",
    hogwartsStudent:"",
    image: ""
  })
}

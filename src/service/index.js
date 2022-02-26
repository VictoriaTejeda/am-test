import axios from "axios";

const API = "http://localhost:5000/characters";

export async function getCharacter() {
  try {
    const response = await axios.get(API);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function saveCharacter(characterData) {
  try {
    console.log(characterData);
    const response = await axios({
      url: API,
      method: "POST",
      data: characterData,
    });
    return response;
  } catch (e) {
    console.log(e);
  }
}

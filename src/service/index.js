import axios from "axios";


const API =
"http://ec2-3-89-196-224.compute-1.amazonaws.com/characters"


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

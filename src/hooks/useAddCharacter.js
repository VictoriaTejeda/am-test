import { useRef, useState } from "react";
import { saveCharacter } from "../service";

export const useAddCharacter = () => {
  
  const form = useRef(null);
  const [disabled, setdisabled] = useState(false);
  const [disable, setdisable] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const isAlive= formData.get("alive")==='true'? true:false;
    const ishogwartsStudent= formData.get("hogwartsStudent")==='true'? true:false;
    const ishogwartsStaff= formData.get("hogwartsStaff")==='true'? true:false;
    const data = {
      name: formData.get("name"),
      eyeColour: formData.get("eyes-color"),
      hairColour: formData.get("hair-color"),
      house: formData.get("house"),
      patronus: formData.get("patronus"),
      dateOfBirth: formData.get("birthday"),
      species: formData.get("birthday"),
      gender: formData.get("gender"),
      alive:  isAlive,
      hogwartsStaff: ishogwartsStaff,
      hogwartsStudent: ishogwartsStudent,
      image: formData.get("url-img"),
    };

    setTimeout(() => saveCharacter(data), 1000)
    ;
  };

  const inputDisabled = () => {
    setdisabled(true);
  };
  const inputDisable = () => {
    setdisable(true);
  };
  return {
    form,
    disable,
    disabled,
    handleSubmit,
    inputDisable,
    inputDisabled,
  };
};

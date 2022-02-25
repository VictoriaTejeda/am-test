import { useRef, useState } from "react";


export const useAddCharacter = () => {
  
  const form = useRef(null);
  const [disabled, setdisabled] = useState(false);
  const [disable, setdisable] = useState(false);
  const [dataCharacter, setDateCharacter] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      eyeColour: formData.get("eyes-color"),
      hairColour: formData.get("hair-color"),
      house: formData.get("house"),
      patronus: formData.get("patronus"),
      dateOfBirth: formData.get("birthday"),
      species: formData.get("birthday"),
      gender: formData.get("gender"),
      alive: formData.get("alive"),
      hogwartsStaff: formData.get("hogwartsStaff"),
      hogwartsStudent: formData.get("hogwartsStudent"),
      image: formData.get("url-img"),
    };
    setDateCharacter(data);
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
    dataCharacter
  };
};

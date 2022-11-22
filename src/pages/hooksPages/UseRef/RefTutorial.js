import React, { useRef, useState } from "react";

function RefTutorial() {
  const [name, setName] = useState("Rob");
  const inputRef = useRef(null);

  const reset = () => {
    inputRef.current.value = "";
    setName(inputRef.current.value);
  };
  const update = () => {
    setName(inputRef.current.value);
  };
  
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Escriba un nombre..." ref={inputRef} />
      <button onClick={reset}>Reset</button>
      <button onClick={update}>Actualizar</button>
    </div>
  );
}

export default RefTutorial;

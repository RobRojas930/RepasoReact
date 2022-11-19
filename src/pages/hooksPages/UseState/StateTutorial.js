import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Rob");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="escribe algo" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

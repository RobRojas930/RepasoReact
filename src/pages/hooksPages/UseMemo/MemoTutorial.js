import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("comentarios", response.data);
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("Se ha procesado");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);

  return (
    <div>
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(toggle);
        }}
      >
        Load
      </button>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Activar
      </button>
      {toggle && <h1> {getLongestName} </h1>}
    </div>
  );
};
export default MemoTutorial;

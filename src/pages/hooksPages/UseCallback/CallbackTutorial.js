import axios from "axios";
import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Vamos di algo!!");

  const returnComment = useCallback(
    (name) => {
      return  data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment}/>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      <button onClick={()=>setData("COME ON VIEJO ")}>CAMBIAR DATA</button>
      {toggle && <h1> {data} </h1>}
    </div>
  );
}

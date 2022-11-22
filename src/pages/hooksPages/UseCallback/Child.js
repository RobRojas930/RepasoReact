import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("ACTUALIZACIÓN");
  }, [returnComment]);

  return <div>{returnComment("Rob")}</div>;
}

export default Child;

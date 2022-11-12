import React, { useState } from "react";
export default function withSearch(Component, dataset, other) {
  return function () {
    const [query, setQuery] = useState("");

    function handleChange(e) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={handleChange} value={query} />
        <Component query={query} dataset={dataset}  {...other}/>
      </div>
    );
  };
}

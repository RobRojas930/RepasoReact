import React, { useState } from "react";
export default function withSearch(Element, dataset, other) {
  return function () {
    const [query, setQuery] = useState("");

    function handleChange(e) {
      setQuery(e.target.value);
    }

    return (
      <div>
        <input onChange={handleChange} value={query} />
        <Element query={query} dataset={dataset}  {...other}/>
      </div>
    );
  };
}

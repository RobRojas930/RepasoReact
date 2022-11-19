import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef('');

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    inputRef.current.value = "HELLO";
  }, []);

  useEffect(() => {
    inputRef.current.value = "THERE";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value={inputRef.current.value} style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;

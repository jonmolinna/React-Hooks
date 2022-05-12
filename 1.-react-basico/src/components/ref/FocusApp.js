import React, { useState, useRef } from "react";

const FocusApp = () => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleFocus = () => {
    // const input = document.getElementById("input");
    // console.log(input);
    // input.value = "Texto Mutado";
    // input.focus();

    const input = inputRef.current;
    // console.log(inputRef);
    // console.log(input.value);
    // input.value = " Texto mutado"; => no hacer ya que no se actualiza en el estado
    input.focus();
  };

  return (
    <div>
      <input
        // id="input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusApp;

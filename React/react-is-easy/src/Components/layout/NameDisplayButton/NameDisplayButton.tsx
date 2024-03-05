import React, { useState } from "react";
import "./NameDisplayButton.css";

function NameDisplayButton(): JSX.Element {
  const [inputName, setInputName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleClick = () => {
    let newName = inputName.replace(/gabriel/gi, "Azriel");
    setDisplayName("Hello " + newName);
  };

  return (
    <div className="NameDisplayButton Box">
      <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
      <button onClick={handleClick}>Display Name</button>
      <p>{displayName}</p>
    </div>
  );
}

export default NameDisplayButton;

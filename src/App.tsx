import { useState } from "react";
import "./App.css";

function App() {
  const [side, setSide] = useState({ src: "../public/assests/head.png" });

  function changeSide() {
    const sideClone = structuredClone(side);
    if (sideClone.src === "../public/assests/head.png")
      sideClone.src = "../public/assests/tail1.png";
    else sideClone.src = "../public/assests/head.png";
    setSide(sideClone);
  }

  return (
    <div className="App">
      <div className="coin">
        <img className="image" src={side.src} />
      </div>
      <button
        className="button"
        onClick={() => {
          changeSide();
        }}
      >
        Flip Coin
      </button>
    </div>
  );
}

export default App;

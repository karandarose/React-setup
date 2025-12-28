import { useState } from "react";
import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState(20);

  const growText = () => {
    setFontSize((prev) => Math.min(prev + 5, 100));
  };

  const shrinkText = () => {
    setFontSize((prev) => Math.max(prev - 5, 0));
  };

  const [alignment, setAlignment] = useState("left");

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <div className="app">
      <h2 className="sized-text" style={{ fontSize: `${fontSize}px` }}>
        This is My Font Sizer Text
      </h2>
      <button onClick={growText}>Grow</button>
      <button onClick={shrinkText}>Shrink</button>

      <hr />

      <p className={`align-text ${alignment}`}>This text changes alignment</p>
      <button onClick={() => setAlignment("left")}>Left</button>
      <button onClick={() => setAlignment("center")}>Center</button>
      <button onClick={() => setAlignment("right")}>Right</button>

      <hr />

      <div
        className="color-box"
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />

      <p className="rgb-values">
        Red: {red}
        <br />
        Green: {green}
        <br />
        Blue: {blue}
      </p>

      <label>
        Red
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
      </label>

      <label>
        Green
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
      </label>

      <label>
        Blue
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />
      </label>
    </div>
  );
}

export default App;

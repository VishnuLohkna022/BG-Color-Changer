import React, { useState } from "react";
import './App.css'; // Create this file for additional styles

function App() {
  const colors = [
    "Cyan", "AquaMarine", "LightGreen", "Brown", 
    "Red", "Green", "Olive", "Blue", 
    "Navy", "Purple", "Magenta", "Pink"
  ];

  const [bgColor, setBGColor] = useState("white");

  // Smart text color for buttons/header
  const getTextColor = (bg) => {
    const lightColors = ["white", "LightGreen", "Cyan", "AquaMarine", "Pink"];
    return lightColors.includes(bg) ? "black" : "white";
  };

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <h1 style={{ color: getTextColor(bgColor) }}>Pick a color!!</h1>

      <div className="color-panel">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBGColor(color)}
            className="color-button"
            style={{
              backgroundColor: color,
              color: getTextColor(color),
            }}
          >
            {color}
          </button>
        ))}
        <button 
          onClick={() => setBGColor("white")}
          className="reset-button"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
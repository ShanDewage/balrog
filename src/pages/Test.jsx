import React, { useEffect } from "react";
import "./Test.css"; // Import the CSS file

function Test() {
  useEffect(() => {
    const rainContainer = document.querySelector(".rain");
    const numberOfDrops = 100; // Adjust number of raindrops

    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement("div");
      drop.className = "drop";
      // Randomize position and animation duration
      drop.style.left = Math.random() * 1000 + "vw";
      drop.style.animationDuration = Math.random() * 10 + 0.5 + "s";
      drop.style.animationDelay = Math.random() * 20 + 0.5 + "s";
      rainContainer.appendChild(drop);
    }
  }, []);

  return (
    <div className="rain-container">
      <div className="rain"></div>
      <div className="content">
        <h1>Test</h1>
      </div>
    </div>
  );
}

export default Test;

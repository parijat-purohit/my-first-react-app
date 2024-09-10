import React, { useState } from "react";
import Navbar from "./Navbar";
import { ReactTyped } from "react-typed";
import "../styles/Intro.css";

const Intro = () => {
  const [text, setText] = useState("Hi there.");

  const handleComplete = () => {
    setTimeout(() => {
      setText("I am Parijat.");
    }, 1500);
  };

  return (
    <div className="intro">
      <Navbar />
      <div className="intro-container">
        <div className="intro-greet">
          <ReactTyped
            strings={[text]}
            typeSpeed={60}
            showCursor={true}
            cursorChar={"|"}
            onComplete={handleComplete}
          />
        </div>
        <div className="intro-bio">
          With five years of Python backend development, primarily in AgTech and FinTech, 
          I'm seeking new opportunities in full-stack development.
        </div>
      </div>
    </div>
  );
};

export default Intro;

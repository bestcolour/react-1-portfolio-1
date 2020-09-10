import React from "react";

//CSS Imports
import style from "./Intro.module.css";
import commonStyle from "../pageMod.module.css";

function getSunsetBg() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";
}

export default function LandingPage() {
  var bgStyle = {
    height: "100%",
    backgroundImage: `url(${getSunsetBg()})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black"
  };

  return (
    <div>
      <header id={style.bgContainer} className={`${commonStyle.col12}`}>
        <div style={bgStyle} />
      </header>

      <div className={`${commonStyle.col12} `}>
        <div id={style.imgBanner}>
          <h1>I am Lee Kee Shen</h1>
          <p>
            I am a game design student at singapore polytechnic. Lorem ipsum. I
            wanna be the very best that no one ever was. Lololololol!!!
          </p>
        </div>
      </div>
    </div>
  );
}

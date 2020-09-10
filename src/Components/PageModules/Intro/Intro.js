import React from "react";

//CSS Imports
import style from "./Intro.module.css";
import commonStyle from "../pageMod.module.css";

function getSunsetBg()
{
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";
}

export default function LandingPage()
{
  var bgStyle = 
  {
    height: "100vh",
    backgroundImage: `url(${getSunsetBg()})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black"
  };

  return (
    <div>
      <header className={`${commonStyle.col12}`} style={bgStyle} id = {style.introContainer}>
          <div id={style.imgTexts}>
            <h1>I am</h1>
            <h1>Lee Kee Shen</h1>
            <p>
              I am a game design student at singapore polytechnic. Lorem ipsum. I
              wanna be the very best that no one ever was. Lololololol!!!
          </p>
        </div>


      </header>

      {/* <div className={`${commonStyle.col12} `}>
       
      </div> */}
    </div>
  );
}

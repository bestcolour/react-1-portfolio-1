import React from "react";
// import AltLink from "../../../Common/AltLink";
//CSS Imports
import style from "./Intro.module.css";
import commonStyle from "../../pageMod.module.css";
//Components
import ImageButtons from "../../../Common/ImageButtons";


function getSunsetBg()
{
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";

  //Debugging
  // return "/Images/Backgrounds/DayBackground.png";
  // return "/Images/Backgrounds/NightBackground.png";

}

export default function Intro(props)
{
  var bgStyle =
  {
    height: "100vh",
    backgroundImage: `url(${getSunsetBg()})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    position: "relative"
  };

  return (
    <header className={`${commonStyle.col12}`} style={bgStyle} id={props.id}>
      <div id={style.imgTexts}>
        <h1>I am</h1>
        <h1>Lee Kee Shen</h1>
        <p>
          I am a game design student at singapore polytechnic. Lorem ipsum. I
          wanna be the very best that no one ever was. Lololololol!!!
          </p>
        <br />
        <div id={style.buttonHolder}>
          <ImageButtons data={props.data.buttonSettingsArray} />
        </div>
      </div>
    </header>
  );
}

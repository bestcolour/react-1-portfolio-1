import React from "react";
// import AltLink from "../../../Common/AltLink";
//CSS Imports
import style from "./Intro.module.css";
import commonStyle from "../../pageMod.module.css";

function getSunsetBg()
{
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";
}

export default function Intro(props)
{
  const { buttonLinkArray, buttonImgArray } = props.data;


  const finalButtonJSX = [];
  for (let i = 0; i < buttonLinkArray.length; i++)
  {
    const buttonImg = i < buttonImgArray.length ? buttonImgArray[i] : "";
    const linkBgStyle =
    {
      backgroundImage: `url(${buttonImg})`,
      backgroundColor: "transparent",
      backgroundRepeat:"no-repeat",
      backgroundSize: "contain"
    };
    
    finalButtonJSX.push
      (
        <a href={buttonLinkArray[i]} style={linkBgStyle} target="_blank"/>
      );
  }

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
    <div>

      <header className={`${commonStyle.col12}`} style={bgStyle} id={style.introContainer}>

        <div id={style.imgTexts}>
          <h1>I am</h1>
          <h1>Lee Kee Shen</h1>
          <p>
            I am a game design student at singapore polytechnic. Lorem ipsum. I
            wanna be the very best that no one ever was. Lololololol!!!
          </p>


          <br />

          <div id={style.buttonHolder}>
            {finalButtonJSX}
          </div>

        </div>






      </header>






    </div>
  );
}

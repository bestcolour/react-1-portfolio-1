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

}

export default function Intro(props)
{
  const {introData,socialMediaData} = props.data;
  const { name,buttonSettingsArray } = socialMediaData;
  const { shortDescription} = introData;

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
        <h1>{name}</h1>
        <p>
         {shortDescription}
          </p>
        <br />
        <div id={style.buttonHolder}>
          <ImageButtons data={buttonSettingsArray} />
        </div>
      </div>
    </header>
  );
}

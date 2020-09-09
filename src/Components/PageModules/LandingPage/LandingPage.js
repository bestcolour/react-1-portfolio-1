import React from "react";

//CSS Imports
import style from "./LandingPage.module.css";

function getSunsetBg()
{
  const hours = new Date().getHours();
  return hours >= 7 && hours < 19
    ? "/Images/Backgrounds/DayBackground.png"
    : "/Images/Backgrounds/NightBackground.png";
}

export default function LandingPage()
{
  return (

    <div>
      <header className={style.header}>
        Header

  </header>

    </div>

  );
}

import React from "react";
//Import style
import commonStyle from "../../pageMod.module.css";
import style from "./AboutMe.module.css";
//Import component
import LPSection from "../../../Common/LPSection";

export default function AboutMe(props)
{
    const
        {
            imageURL,
            aboutMeDescription,
            name,
            country
        } = props.data;

    var imgStyle =
    {
        height: "12.5vw",
        width: "12.5vw",
        backgroundImage: `url(${imageURL})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "2",
        borderRadius: "50%"
    };


    const leftContent =
        <div id={style.imageHolder}>
            <div style={imgStyle} />
        </div>

    const rightContent =
        <div id={style.textsHolder}>
            <h1 id={style.highestH1}>About Me</h1>
            <p>{aboutMeDescription}</p>

            <h1>Contact Details</h1>
            <p>{name}<br />{country}</p>
        </div>



    return (
        <div id={props.id}>
            <div id={style.aboutMeHolder}>
                <LPSection leftContent={leftContent} rightContent={rightContent} />
            </div>
        </div>
    );

}
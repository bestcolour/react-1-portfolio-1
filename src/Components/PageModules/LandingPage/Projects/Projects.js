import React from "react";
//css
import style from "./Projects.module.css";
import commonStyle from "../../pageMod.module.css";
import { Link } from "react-router-dom";

export default function Projects(props)
{
    const { projectSettingsArray } = props.data;
    const finalImgJSX = [];

    for (const setting of projectSettingsArray)
    {
        var imgBgStyle =
        {
            backgroundImage: `url(${setting.projectImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }

        finalImgJSX.push
            (
                <a style={imgBgStyle} href={setting.projectLink} className={style.imgStyle} />
            );
    }

    return (
        <div className={commonStyle.col12} id={style.backgroundColor}>
            <div id={props.id} className={`${commonStyle.LProw} ${style.mainContainer}`} >

                <h1 id={style.title}>
                    Check out some of my works
                </h1>

                <div id={style.projectsHolder}>
                    {finalImgJSX}
                </div>

                <div id={style.seeMoreHolder}>
                    <section><Link to="/projects">See more</Link></section>
                </div>

            </div>
        </div>
    );
}
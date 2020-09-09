import React from "react";
import commonStyle from "../pageMod.module.css";
import style from "./NewHeader.module.css";
import AltLink from "../../Common/AltLink";

export default function NewHeader(props)
{
    const linksArray = typeof props.data.linksArray === "undefined" ? [window.document.hostname] : props.data.linksArray;
    const namesArray = typeof props.data.namesArray === "undefined" ? ["Link"] : props.data.namesArray;
    const linkTypeArray =  typeof props.data.linkTypeArray === "undefined" ? [false] : props.data.linkTypeArray;
    const finalJSX = [];

    for (let i = 0; i < linksArray.length; i++)
    {
        const name = i < namesArray.length ? namesArray[i] : "MissingLink";
        const openInNewTabBool = i < linkTypeArray.length ? linkTypeArray[i] : false;

        finalJSX.push
            (
                <li>
                    <AltLink 
                    link = {linksArray[i]}
                    linkName = {name}
                    openInNewTab = {openInNewTabBool}
                    />
                </li>
            );
    }


    //We will render the navBar only on desktop and we will render the navigation button on mobile only
    return (
        <nav>

            <div className={`${commonStyle.col12}`} id={style.navBar}>
                <ul className={style.linksContainer}>
                    {finalJSX}
                </ul>
            </div>

            <div className={`${commonStyle.col12}`} id={style.navButton}>
                This is the navButton
            </div>

        </nav>
    );
}
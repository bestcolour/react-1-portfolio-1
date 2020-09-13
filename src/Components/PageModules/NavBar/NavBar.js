import React from "react";
import commonStyle from "../pageMod.module.css";
import style from "./NavBar.module.css";
import AltLink from "../../Common/AltLink";

export default function NavBar(props)
{
    const { linkSettingsArray } = props.data;
    const finalJSX =[];

    for(const setting of linkSettingsArray)
    {
        finalJSX.push
        (
                <li>
                    <AltLink
                        link={setting.link}
                        linkName={setting.linkName}
                        openInNewTab={setting.openInNewTab}
                    />
                </li>
        )
        ;
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
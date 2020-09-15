import React from "react";
//css
import commonStyle from "../../pageMod.module.css";
import style from "./Footer.module.css";
//Components
import ImageButtons from "../../../Common/ImageButtons";

export default function Footer(props)
{
    const { buttonSettingsArray, contactDetailsArray } = props.data;

    const finalContactJSX = [];

    for (const item of contactDetailsArray)
    {
        finalContactJSX.push(<p>{`${item.platform}: ${item.id}`}</p>);
    }

    return (
        <div className={commonStyle.col12} >
            <div className={commonStyle.LProw} id={style.topFooter} >
                <div id = {style.topFooterContainer}>
                    <h1>Feel free to contact me for any work or suggestions below</h1>
                    <div id={style.contactDetailsHolder}>
                        {finalContactJSX}
                    </div>
                </div>

            </div>
            <div className={commonStyle.LProw} id={style.bottomFooter}>
               <div id = {style.bottomFooterContainer}>
                <div id={style.buttonHolder}>
                    <ImageButtons data={buttonSettingsArray} />
                </div>
               </div>
            </div>
        </div>
    );
}

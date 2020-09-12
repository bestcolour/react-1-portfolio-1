import React from "react";
import style from "./LPSection.module.css";
import commonStyle from "../../PageModules/pageMod.module.css";

export default function LPSection(props)
{
    const { leftContent, rightContent } = props;

    return (
        <div className={`${commonStyle.col12} ${style.sectionClass}`} >

        <div className={style.rowClass}>

            <div className={commonStyle.col3} id={style.leftContent} >
              {leftContent}
            </div>

            <div className={commonStyle.col9} id ={style.rightContent}>
              {rightContent}
            </div>

        </div>
    </div>
    );
}
import React from "react";
import style from "./LPSection.module.css";
import commonStyle from "../../PageModules/pageMod.module.css";

export default function LPSection(props)
{
  const { leftContent, rightContent, bottomContent } = props;

  return (
    <div className={`${commonStyle.col12} ${style.sectionClass}`} >

      <div className={commonStyle.LProw}>

        <div className={commonStyle.col3} id={style.leftContent} >
          {leftContent}
        </div>

        <div className={commonStyle.col9} id={style.rightContent}>
          {rightContent}
        </div>

      </div>
      
      <div className={commonStyle.LProw} id = {style.bottomContent}>
        {bottomContent} 
        </div>
    </div>
  );
}
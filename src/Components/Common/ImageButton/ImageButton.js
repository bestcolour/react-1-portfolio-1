import React from "react";
import style from "./ImageButton.module.css";

export default function ImageButton(props)
{
    const
        {
            imgSrc,
            openInNewTab,
            imgLink,
            onClickCallback
            
        }
        = props.data;


    return (


        <div className="buttonWrapper">

            <a
                href={imgLink}
                target = {openInNewTab? "_blank" : "_self"}
                onClick={onClickCallback}
            >
                <img
                    src={imgSrc}
                />
            </a>


        </div>

    );
}

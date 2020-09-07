import React from "react";
import style from "./ImageButton.module.css";

export default function Button(props)
{
    const
        {
            imgSrc,
            imgLink,
            onClickCallback
        }
            = props.data;

    return (

        <div className ="buttonWrapper">

            <a
            href = {imgLink}
            onClick = {onClickCallback}
            >
                <img
                    src={imgSrc}
                />
            </a>


        </div>

    );
}

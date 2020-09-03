import React from "react";
import style from "./TitledBgContainer.module.css";

export default function TitledBgContainer(props)
{
    const
        {
            image,
            imageAlternative,
            title,
            description
        } = props.data;


    return (

        <div className={style.titledBgContainer}>

            <img
                src={image}
                alt={imageAlternative}
            />

            <div className={style.textContainer}>
                <h1 >
                    {title}
                </h1>
                <p >
                    {description}
                </p>
            </div>


        </div >

    );

}
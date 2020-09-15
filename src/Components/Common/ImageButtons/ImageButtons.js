import React from "react";

export default function ImageButtons(props)
{
    const array = props.data;

    const finalButtonJSX = [];

    for (const setting of array)
    {
        const linkBgStyle =
        {
            backgroundImage: `url(${setting.buttonImg})`,
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
        };

        finalButtonJSX.push
            (
                <a href={setting.buttonLink} style={linkBgStyle} target="_blank" />
            );


           
    }

    return (
        <section >{ finalButtonJSX }</section>
    );
}
import React from "react";
//Css
import style from "./PercentageBar.module.css";



export default function PercentageBar(props)
{
    const {percentage,name,color,bgColor} = props;

    var barStyle =
    {
        width: `${percentage.toString()}%`,
        backgroundColor:color!=undefined? color : "blue"
    };

    var bgBarStyle = 
    {
        backgroundColor: bgColor!=undefined? bgColor: "grey"
    }


    //i used the section and nav semantic tags so that i could overide the colours 
    //using outside css files when this component is being used else where.
    return (
        <div >
            <h1>{name}</h1>
            <section className={style.percentageBarHolder} style={bgBarStyle}>
                <nav style={barStyle} className={style.percentageBar} />
            </section>
        </div>

    );

}
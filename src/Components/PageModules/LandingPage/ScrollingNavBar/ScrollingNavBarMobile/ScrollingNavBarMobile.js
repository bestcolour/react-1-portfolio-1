import React, { Component } from "react";
import commonStyle from "../../../pageMod.module.css";
import style from "./ScrollingNavBarMobile.module.css";

export default class ScrollingNavBarMobile extends Component
{

    constructor()
    {
        super();
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick()
    {
        console.log("Hello");

        //Toggle overlay
        document.getElementById(style.darkOverlay).classList.toggle(style.showOverlay);


    }

    render()
    {
        return (
            <nav id={style.navBarMobileContainer}>
                <div id={style.darkOverlay} className={`${style.transition} `} />


            </nav>
        );
    }
}



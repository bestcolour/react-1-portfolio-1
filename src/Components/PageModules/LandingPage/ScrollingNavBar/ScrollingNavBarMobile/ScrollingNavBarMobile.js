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
        document.getElementById(style.sideMenu).classList.toggle(style.showSideMenu);
    }

    render()
    {
        const { dataArray } = this.props.data;

        const finalJSX = [];

        for (const data of dataArray)
        {
            finalJSX.push
                (
                    <a href={`#${data.sectionId}`}>
                        {data.sectionName}
                    </a>
                );
        }

        return (
            <nav id={style.navBarMobileContainer}>
                <div id={style.darkOverlay} className={`${style.transition}`} onClick={this.handleClick} />


                <div id={style.sideButton} onClick={this.handleClick}>
                    <div className={style.stripe}></div>
                    <div className={style.stripe}></div>
                </div>

                <div id={style.sideMenu} className={style.transition}>

                    {finalJSX}


                </div>



            </nav>
        );
    }
}



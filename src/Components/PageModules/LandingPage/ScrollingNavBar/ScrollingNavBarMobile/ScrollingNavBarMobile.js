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



    }

    render()
    {
        return (
            <div id={style.navBarMobile} onClick={this.handleClick} className = {style.transition}>

                <div id ={style.hiddenContainer}>
                </div>

                <div id ={style.shownContainer}>
                    <div id={style.stripe1} />
                    <div id={style.stripe2} />
                </div>


            </div>
        );
    }
}



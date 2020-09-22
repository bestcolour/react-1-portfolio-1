import React, { Component } from "react";
import commonStyle from "../../../pageMod.module.css";
import style from "../ScrollingNavBar.module.css";

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
            <div id={style.navBarMobile} onClick={this.handleClick} >

                <div id={style.stripe1} />
                <div id={style.stripe2} />


            </div>
        );
    }
}



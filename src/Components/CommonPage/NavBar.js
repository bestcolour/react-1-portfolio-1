import React, { Component } from "react";

import style from "./NavBar.module.css";

export default class NavBar extends Component
{
    constructor()
    {
        super();
        this.handleScrolling = this.handleScrolling.bind(this);
        this.determineIfWithin = this.determineIfWithin.bind(this);
        this.state = { isShown: true }
    }


    determineIfWithin(value, min, max)
    {
        return (value >= min) && (value < max);
    }

    handleScrolling()
    {
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        let scrollPercentage = (scrollY / (document.documentElement.offsetHeight - window.innerHeight)) * 100

        const { appearRange } = this.props.data;


        let prevShown = this.state.isShown;
        for (const range of appearRange)
        {
            if (this.determineIfWithin(scrollPercentage, range.min, range.max) != prevShown)
            {
                this.setState
                    (
                        {
                            isShown : !prevShown
                        }
                    )
                break;
            }
        }
    }



    componentDidMount()
    {
        window.addEventListener("scroll", this.handleScrolling);
    }

    componentWillUnmount()
    {
        window.removeEventListener("scroll", this.handleScrolling);

    }




    render()
    {

        if (!this.state.isShown)
        {
            return <div />
        }


        const
            {
                linksArray, //The links which will direct the user wen the text is pressed
                namesArray, //The actual text which will be displayed on the nav bar
            }
                = this.props.data;



        //If the arrays arent in correctly, give default value
        if (linksArray === undefined || namesArray === undefined)
        {
            return (
                <nav className={style.navContainer}>
                    <a href="https://Google.com">Link1</a>
                    <a href="https://Google.com">Link2</a>
                    <a href="https://Google.com">Link3</a>
                </nav>
            )
        }

        const finalJSX = [];
        for (let i = 0; i < linksArray.length; i++)
        {
            const name = i < namesArray.length ? namesArray[i] : "MissingLink";

            finalJSX.push
                (
                    <a href={linksArray[i]} key={`Nav Bar Element ${i}`}>{name} </a>
                );
        }


        return (
            <nav className={style.navContainer}>
                {finalJSX}
            </nav>
        );
    }


}

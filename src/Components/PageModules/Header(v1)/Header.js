import React, { Component } from "react";
import { Link } from "react-router-dom";

import style from "./Header.module.css";

export default class Header extends Component
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

        const appearRange = typeof this.props.appearRange === "undefined" ? [{ min: 0, max: 101 }] : this.props.appearRange;

        let isShown = false;
        for (const range of appearRange)
        {
            if (this.determineIfWithin(scrollPercentage, range.min, range.max))
            {
                isShown = true;
                break;
            }
        }

        if (isShown != this.state.isShown)
        {
            this.setState({ isShown: isShown });
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

        const linksArray = typeof this.props.linksArray === "undefined" ? ["/"] : this.props.linksArray;
        const namesArray = typeof this.props.namesArray === "undefined" ? ["Link"] : this.props.namesArray;
        const finalJSX = [];

        for (let i = 0; i < linksArray.length; i++)
        {
            const name = i < namesArray.length ? namesArray[i] : "MissingLink";

            finalJSX.push
                (
                    <li>
                        <Link to={linksArray[i]}>{name}</Link>
                    </li>
                    // <a href={linksArray[i]} key={`Nav Bar Element ${i}`}>{name} </a>
                );
        }


        return (
            <header className={style.headerWrapper}>
                <nav className = {style.navWrapper}>
                <ul >
                    {finalJSX}
                </ul>
                </nav>
            </header>
        );
    }


}

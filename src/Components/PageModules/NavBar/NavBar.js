import React, { Component } from "react";
import commonStyle from "../pageMod.module.css";
import style from "./NavBar.module.css";
import AltLink from "../../Common/AltLink";
import { render } from "@testing-library/react";


export default class NavBar extends Component
{
    constructor()
    {
        super();
        this.m_NavBarRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.state =
        {
            isNavHidden: false
        }
    }


    handleScroll()
    {
        const heightOfNavBar = this.m_NavBarRef.current.clientHeight;
        if (window.scrollY > heightOfNavBar)
        {
            if (this.state.isNavHidden != true)
            {
                this.setState({ isNavHidden: true });
                console.log("Hide")
            }
        }
        else
        {
            if (this.state.isNavHidden == true)
            {
                this.setState({ isNavHidden: false });
                console.log("show")
            }
     

        }
    }

    componentDidMount()
    {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount()
    {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render()
    {

        const { linkSettingsArray } = this.props.data;
        const finalJSX = [];

        for (const setting of linkSettingsArray)
        {
            finalJSX.push
                (
                    <li>
                        <AltLink
                            link={setting.link}
                            linkName={setting.linkName}
                            openInNewTab={setting.openInNewTab}
                        />
                    </li>
                )
                ;
        }

        //We will render the navBar only on desktop and we will render the navigation button on mobile only
        return (
            <nav id={style.navWrapper} >
                <div className={`${commonStyle.col12}`} id={style.navBar} ref={this.m_NavBarRef}>
                    <ul className={style.linksContainer}>
                        {finalJSX}
                    </ul>
                </div>

                <div className={`${commonStyle.col12}`} id={style.navButton}>
                    This is the navButton
        </div>
            </nav>
        );
    }
}

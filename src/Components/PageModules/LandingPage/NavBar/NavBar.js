import React, { Component } from "react";
import commonStyle from "../../pageMod.module.css";
import style from "./NavBar.module.css";

export default class NavBar extends Component
{
    constructor()
    {
        super();
        this.m_NavBarRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.state =
        {
            //For the sake of remembering the state
            // currentState will have 3 values
            // ShownAtTop : This is when the nav bar will render itself regardless of scroll delta 
            // as this its original position when a page first loads
            // HiddenPastTop : This is when user scrolls down and the distance covered by the nav bar
            //has been passed 
            // ShownPastTop: This is when user scrolls up and when the distance covered by the nav bar has been passed.
            navBarState: "ShownAtTop",
            prevScrollY: 0,
            //Initialize this first when the navbar is loaded
            navBarHeight: 0,

        }


    }



    componentDidMount()
    {
        const height = this.m_NavBarRef.current.clientHeight;
        this.setState
            (
                { navBarHeight: height }
            )

        console.log(this.state.navBarHeight);

        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount()
    {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleWindowResize);
    }

    render()
    {
        //We will render the navBar only on desktop and we will render the navigation button on mobile only
        return (
            <nav>
                <div className={`${commonStyle.col12} ${style.transition}`} id={style.navBar} ref={this.m_NavBarRef}>
                    <ul className={style.linksContainer}>
                        <li><a
                            href={"#INTRO"}
                            className={style.selectedSection}
                            onClick={this.handleClick}
                        >
                            Intro</a></li>
                        <li><a href={"#ABOUT"} onClick={this.handleClick} >About</a></li>
                        <li><a href={"#EDUCATION"} onClick={this.handleClick}>Education</a></li>
                        <li><a href={"#WORK"} onClick={this.handleClick} >Work</a></li>
                        <li><a href={"#SKILLS"} onClick={this.handleClick}>Skills</a></li>
                        <li><a href={"#PROJECTS"} onClick={this.handleClick} >Projects</a></li>
                    </ul>
                </div>



                <div className={`${commonStyle.col12}`} id={style.navButton}>
                    This is the navButton
        </div>



            </nav>

        );
    }


    //<===========================METHODS=====================================>

    toggleNavBar()
    {
        this.m_NavBarRef.current.classList.toggle(style.hide);
    }


    handleScroll()
    {
        // Since nav bar is always rendered at the top of the page, we dont need to worry about its position
        const currentScrollY = window.scrollY;
        const heightOfNavBar = this.m_NavBarRef.current.clientHeight;
        console.log(heightOfNavBar);

        const { navBarState, navBarHeight } = this.state;
        switch (navBarState)
        {
            case "ShownAtTop":
                if (currentScrollY > navBarHeight)
                {
                    this.toggleNavBar();
                    this.setState({ navBarState: "HiddenPastTop", prevScrollY: currentScrollY });
                }
                break;

            case "HiddenPastTop":

                //If scroll dir is upwards
                if (currentScrollY < this.state.prevScrollY)
                {
                    const newBarState = currentScrollY <= navBarHeight ? "ShownAtTop" : "ShownPastTop";
                    this.toggleNavBar();
                    this.setState({ navBarState: newBarState, prevScrollY: currentScrollY });
                    return;
                }

                this.setState({ prevScrollY: currentScrollY });
                break;

            case "ShownPastTop":
                //If scroll dir is downwards
                if (currentScrollY > this.state.prevScrollY)
                {
                    this.toggleNavBar();
                    this.setState({ navBarState: "HiddenPastTop", prevScrollY: currentScrollY });
                    return;
                }


                //If scroll dir is upwards and scroll is entering navbar's original position
                if (currentScrollY <= navBarHeight)
                {
                    this.setState({ navBarState: "ShownAtTop", prevScrollY: currentScrollY });
                    return;
                }


                this.setState({ prevScrollY: currentScrollY });
                break;
        }


    }


    //This function will be used for selecting the nav
    handleClick(event)
    {
        const currentElementSelected = event.target;
        console.log(currentElementSelected);
    }

    handleWindowResize()
    {
        console.log("Hello");
    }

}

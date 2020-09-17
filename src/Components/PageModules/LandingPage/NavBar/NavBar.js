import React, { Component } from "react";
import commonStyle from "../../pageMod.module.css";
import style from "./NavBar.module.css";
// import AltLink from "../../../Common/AltLink";

export default class NavBar extends Component
{
    constructor()
    {
        super();
        this.m_NavBarRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNavBar = this.toggleNavBar.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
            prevScrollY: 0
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
        // const {  centerLinksArray } = this.props.data;
        const finalJSX = [];


        const currentLink = window.location.href;
        
        // for (const setting of centerLinksArray)
        // {
        //     const setId = currentLink == setting.linkName ? style.selectedPage : null;

        //     finalJSX.push
        //         (
        //             <li onClick={() => this.handleClick(this)}
        //                 id={setId}
        //             >

        //                 <AltLink
        //                     link={setting.link}
        //                     linkName={setting.linkName}
        //                     openInNewTab={setting.openInNewTab}
        //                 />
        //             </li>
        //         )
        //         ;
        // }

        //We will render the navBar only on desktop and we will render the navigation button on mobile only
        return (
            <nav>
                <div className={`${commonStyle.col12} ${style.transition}`} id={style.navBar} ref={this.m_NavBarRef}>
                    <ul className={style.linksContainer}>
                        {/* {finalJSX} */}Hi
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

        const { navBarState } = this.state;
        switch (navBarState)
        {
            case "ShownAtTop":
                if (currentScrollY > heightOfNavBar)
                {
                    this.toggleNavBar();
                    this.setState({ navBarState: "HiddenPastTop", prevScrollY: currentScrollY });
                }
                break;

            case "HiddenPastTop":

                //If scroll dir is upwards
                if (currentScrollY < this.state.prevScrollY)
                {
                    const newBarState = currentScrollY <= heightOfNavBar ? "ShownAtTop" : "ShownPastTop";
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
                if (currentScrollY <= heightOfNavBar)
                {
                    this.setState({ navBarState: "ShownAtTop", prevScrollY: currentScrollY });
                    return;
                }


                this.setState({ prevScrollY: currentScrollY });
                break;
        }


    }


    handleClick(element)
    {
        const currentElementSelected = document.getElementById(style.selectedPage);
        console.log(currentElementSelected);
        // currentElementSelected.classList.remove(style.selectedPage);
        // element.classList.add(style.selectedPage);
    }


}

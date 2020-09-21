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
        this.handleTransition = this.handleScrollUp.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.updateSectionsSizes = this.updateSectionsSizes.bind(this);
        this.calibrateSectionID = this.calibrateSectionID.bind(this);
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
            sectionHeightMarks: [],
            currentSectionIndex: 0
        }


    }




    componentDidMount()
    {
        this.updateSectionsSizes();
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
        const { dataArray } = this.props.data;
        const listItemJSXArray = [];


        for (const data of dataArray)
        {
            const { sectionId, sectionName } = data;

            listItemJSXArray.push
                (
                    <li><a href={`#${sectionId}`}>{sectionName}</a></li>
                )
        }



        //We will render the navBar only on desktop and we will render the navigation button on mobile only
        return (
            <nav>
                <div className={`${commonStyle.col12} ${style.transition}`} id={style.navBar} ref={this.m_NavBarRef}>
                    <ul className={style.linksContainer}>
                        {listItemJSXArray}
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
        //Heights
        const heightOfNavBar = this.m_NavBarRef.current.clientHeight;
        // console.log(currentScrollY);

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

                this.handleScrollDown();
                this.setState({ prevScrollY: currentScrollY });
                break;

            case "ShownPastTop":
                //If scroll dir is downwards
                if (currentScrollY > this.state.prevScrollY)
                {
                    this.toggleNavBar();
                    this.handleScrollDown();
                    this.setState({ navBarState: "HiddenPastTop", prevScrollY: currentScrollY });
                    return;
                }


                //If scroll dir is upwards and scroll is entering navbar's original position
                if (currentScrollY <= heightOfNavBar)
                {
                    this.handleScrollUp();
                    this.setState({ navBarState: "ShownAtTop", prevScrollY: currentScrollY });
                    return;
                }

                this.handleScrollUp();
                this.setState({ prevScrollY: currentScrollY });
                break;
        }


    }


    //This will only be called when you are scrolling upwards
    handleScrollUp()
    {
        if (this.state.currentSectionIndex === -1)
        {
            this.calibrateSectionID();
            return;
        }

        const currentTarget = this.state.sectionHeightMarks[this.state.currentSectionIndex];
        const currentScrollY = window.scrollY;

        if (currentScrollY >= currentTarget)
        {
            this.setState
                (
                    (prevState) =>
                    {
                        return { currentSectionIndex: prevState.currentSectionIndex - 1 };
                    }
                )
        }

        // const array = this.state.sectionHeightMarks;
        // for (let index = array.length - 1; index >= 0; index--)
        // {
        //     const height = array[index];
        //     if (currentScrollY >= height)
        //     {
        //         console.log(`Current Scroll: ${currentScrollY} Height: ${height} Index: ${index}`);
        //         break;
        //     }
        // }


    }

    handleScrollDown()
    {
        if (this.state.currentSectionIndex === -1)
        {
            return;
        }

        //Set index to -1 to signify that index needs re-calibration
        this.setState({ currentSectionIndex: -1 });
    }

    //Returns the section integer(for the sectionHeightMarks array) by comparing the current scrolly and all the sectionHeightMarks
    calibrateSectionID()
    {
        const currentScrollY = window.scrollY;
        const array = this.state.sectionHeightMarks;

        for (let index = array.length - 1; index >= 0; index--)
        {
            const height = array[index];
            if (currentScrollY >= height)
            {
                this.setState({ currentSectionIndex: index });
                return;
            }
        }
    }


    //Update section sizes only when window resizes
    handleWindowResize()
    {
        this.updateSectionsSizes();
    }

    updateSectionsSizes()
    {
        const newSectionMarks = [0];
        let currentTotalHeight = 0;
        const { dataArray } = this.props.data;

        //With the IDs from props, we get and store the currentTotalHeight of the elements (which can be found cause we have the ids)
        //currentTotalHeight is the current total sum of all the elements found so far in the for loop
        for (const data of dataArray)
        {
            const { sectionId } = data;
            currentTotalHeight += document.getElementById(sectionId).clientHeight;
            newSectionMarks.push(currentTotalHeight);
        }

        this.setState({ sectionHeightMarks: newSectionMarks });
    }


}

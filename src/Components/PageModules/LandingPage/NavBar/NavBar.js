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
        // this.toggleNavBar = this.toggleNavBar.bind(this);
        // this.ShownPastTop_handleScrollUp = this.ShownPastTop_handleScrollUp.bind(this);
        this.handleWindowResize = this.handleWindowResize.bind(this);
        // this.changeSelectedSection = this.changeSelectedSection.bind(this);
        // this.updateSectionsSizes = this.updateSectionsSizes.bind(this);
        // this.getCurrentSectionID = this.getCurrentSectionID.bind(this);
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
            currentSectionIndex: -1
        }


    }


    initialise()
    {
        //So i apparently cant get this.state."values name" when i am inside this componentDidMount scope 
        //even though i called "setstate before logging the value"
        //So i changed all of the functions into functions that require a parameter
        const newSectionSize = this.getNewSectionsSizes();
        const currSectionIndex = this.getCurrentSectionIndex(newSectionSize);

        this.changeSelectedSection(currSectionIndex);
        this.setState({ sectionHeightMarks: newSectionSize, currentSectionIndex: currSectionIndex });
    }

    componentDidMount()
    {
        this.initialise();
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
                    <li id={`nav-${sectionId}`}><a href={`#${sectionId}`}>{sectionName}</a></li>
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


    //<===========================SUPPORTING METHODS=====================================>

    toggleNavBar()
    {
        this.m_NavBarRef.current.classList.toggle(style.hide);
    }

    changeSelectedSection(currentSectionIndex)
    {
        //Clear the prev elements' of the class
        const array = this.props.data.dataArray;
        for (let index = 0; index < array.length; index++)
        {
            const sectionID = `nav-${array[index].sectionId}`;

            const element = document.getElementById(sectionID);
            element.classList.remove(style.selectedSection);
        }

        //Set new class to new element
        const newSectionID = `nav-${array[currentSectionIndex].sectionId}`;
        // const newSectionID = `nav-${array[this.state.currentSectionIndex].sectionId}`;
        document.getElementById(newSectionID).classList.add(style.selectedSection);

    }


    handleScroll()
    {
        // Since nav bar is always rendered at the top of the page, we dont need to worry about its position
        const currentScrollY = window.scrollY;
        //Heights
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

                //Else if scroll dir is downwards
                this.HiddenPastTop_handleScrollDown();

                break;

            case "ShownPastTop":
                //If scroll dir is downwards
                if (currentScrollY > this.state.prevScrollY)
                {
                    this.toggleNavBar();
                    this.setState({ navBarState: "HiddenPastTop", prevScrollY: currentScrollY });
                    return;
                }

                //Else if scroll dir is upwards 

                //and scroll is entering navbar's original position
                if (currentScrollY <= heightOfNavBar)
                {
                    this.setState({ navBarState: "ShownAtTop", prevScrollY: currentScrollY });
                    return;
                }

                this.ShownPastTop_handleScrollUp();
                break;
        }


    }



    ShownPastTop_handleScrollUp()
    {
        let currentIndex = this.state.currentSectionIndex;
        const currentScrollY = window.scrollY;

        if (currentIndex === -1)
        {
            this.setState({ currentSectionIndex: this.getCurrentSectionIndex(this.state.sectionHeightMarks), prevScrollY: currentScrollY });
            this.changeSelectedSection(this.state.currentSectionIndex);
            return;
        }

        //Set curr index to section's top index (in relation to sectionHeightMarks)
        currentIndex = this.state.currentSectionIndex;
        //Get the top point of the prev section to indicate that you have reached a new section
        // const topPoint = currentIndex > 0 ? this.state.sectionHeightMarks[currentIndex - 1] : this.state.sectionHeightMarks[currentIndex];
        const topPoint = this.state.sectionHeightMarks[currentIndex];
        // const botPoint = this.state.sectionHeightMarks[currentIndex + 1];

        console.log(currentScrollY, topPoint);


        //When u scroll up, currentScrollY becomes smaller
        //So when your scroll y is smaller than the bot point of the section,
        if (currentScrollY <= topPoint)
        {
            //Change the section id
            currentIndex--;
            this.changeSelectedSection(this.state.currentSectionIndex);
            this.setState
                (
                    { prevScrollY: currentScrollY, currentSectionIndex: currentIndex }
                )
            return;
        }

        this.setState({ prevScrollY: currentScrollY });
    }

    HiddenPastTop_handleScrollDown()
    {
        const currentScrollY = window.scrollY;

        //If index is already set to -1 (to show that it needs to be refreshed)
        if (this.state.currentSectionIndex === -1)
        {
            this.setState({ prevScrollY: currentScrollY });
        }

        this.setState({ currentSectionIndex: -1, prevScrollY: currentScrollY });
    }

    //Returns the integer index which corresponds with sectionData's dataArray in props
    //by comparing the current scrolly and all the sectionHeightMarks
    getCurrentSectionIndex(sectionMarksArray)
    {
        // const array = this.state.sectionHeightMarks;
        const currScrollY = window.scrollY;
        console.log(currScrollY, sectionMarksArray);
        //index must be smaller than array.length -1 because the number we r going to return is always going to be index
        //however since we added an extra element inside of updateSectionsSizes (ie 0), we need to -1 one
        for (let index = 0; index < sectionMarksArray.length - 1; index++)
        {
            //imagine top point as the top of a box
            const topPoint = sectionMarksArray[index];
            //Image bot point as the bottom of a box
            const botPoint = sectionMarksArray[index + 1];

            if (currScrollY >= topPoint && currScrollY < botPoint)
            {
                console.log(index);
                return index;
            }

        }

    }


    //Update section sizes only when window resizes
    handleWindowResize()
    {
        this.setState({ sectionHeightMarks: this.getNewSectionsSizes() });
    }

    getNewSectionsSizes()
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

        console.log(newSectionMarks);
        return newSectionMarks;
    }


}

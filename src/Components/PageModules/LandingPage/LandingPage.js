import React from "react";
//Importing components
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Qualifications from "./Qualifications";
import Projects from "./Projects";
import Footer from "./Footer";
import ScrollingNavBar from "./ScrollingNavBar";

const sectionData =
{
    desktopData:
    {
        dataArray:
            [
                {
                    sectionId: "INTRO",
                    sectionName: "Intro"
                },
                {
                    sectionId: "ABOUT",
                    sectionName: "About"
                },
                {
                    sectionId: "EDUCATION",
                    sectionName: "Education"
                },
                {
                    sectionId: "WORK",
                    sectionName: "Work"
                },
                {
                    sectionId: "SKILLS",
                    sectionName: "Skills"
                },
                {
                    sectionId: "PROJECTS",
                    sectionName: "Projects"
                },

            ]
    }



    
};


export default function LandingPage(props)
{

    return (
        <div>
            <ScrollingNavBar data={sectionData} />

            <Intro data={props.data.socialMediaData} id="INTRO" />

            <AboutMe data={props.data.aboutMeData} id="ABOUT" />

            <Qualifications data={props.data.qualificationsData} />
            <Projects data={props.data.projectsData} id="PROJECTS" />
            <Footer data={props.data.socialMediaData} />
        </div>
    );
}


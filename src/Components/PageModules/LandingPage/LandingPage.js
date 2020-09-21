import React from "react";
//css
import style from "./LandingPage.module.css";

//Importing components
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Qualifications from "./Qualifications";
import Projects from "./Projects";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function LandingPage(props)
{
    return (
        <div>
            <NavBar data={style.about} />

            <Intro data={props.data.socialMediaData} id = "INTRO" />

            <AboutMe data={props.data.aboutMeData} id = "ABOUT" />

            <Qualifications data={props.data.qualificationsData}  />
            <Projects data={props.data.projectsData} id = "PROJECTS"/>
            <Footer data={props.data.socialMediaData} />
        </div>
    );
}


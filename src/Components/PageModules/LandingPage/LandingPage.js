import React from "react";

//Importing components
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Qualifications from "./Qualifications";
import Projects from "./Projects";

export default function LandingPage(props)
{
    return (
        <div>
            <Intro data={props.data.introData} />
            <AboutMe data={props.data.aboutMeData} />
            <Qualifications data={props.data.qualificationsData} />
            <Projects data = {props.data.projectsData}/>
        </div>
    );
}


import React from "react";

//Importing components
import Intro from "./Intro";
import AboutMe from "./AboutMe";

export default function LandingPage(props)
{
    return (
        <div>
            <Intro data={props.data.introData} />
            <AboutMe data = {props.data.aboutMeData} />
        </div>
    );
}


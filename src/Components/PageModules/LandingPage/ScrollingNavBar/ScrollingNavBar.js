import React from "react";
//Components
import ScrollingNavBarDesktop from "./ScrollingNavBarDesktop";
import ScrollingNavBarMobile from "./ScrollingNavBarMobile";

export default function ScrollingNavBar(props)
{
    return (
        <nav>
            <ScrollingNavBarDesktop data={props.data.desktopData} />
            <ScrollingNavBarMobile />
        </nav>
    );
}
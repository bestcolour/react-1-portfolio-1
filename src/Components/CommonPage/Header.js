import React from "react";

//CSS Imports
import headerStyle from "./Header.module.css";
import pageStyle from "./CommonPage.module.css";
//Component imports
import TitledBg from "../Common/TitledBgContainer/TitledBgContainer.js";


export default function Header()
{
    return (


        <div className={headerStyle.headerClass}>

            <TitledBg data=
                {
                    {
                        image: "/Images/Backgrounds/SunsetBackground.png",
                        imageAlternative: "Sunset Bg",
                        title: "Lee Kee Shen",
                        description: "I am a Frontend Developer and Data Scientist.I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time."
                    }
                }
            />

            <nav className={headerStyle.navContainer}>

                <a

                    href="https://Google.com"
                >Link1</a>
                <a href="https://Google.com">Link2</a>
                <a href="https://Google.com">Link3</a>

            </nav>







        </div>

    );
}

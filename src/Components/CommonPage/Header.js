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
                        image: "/Images/Backgrounds/SunsetBackground2.png",
                        imageAlternative: "Sunset Bg",
                        title: "Lee Kee Shen",
                        description: "The world as it is"
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

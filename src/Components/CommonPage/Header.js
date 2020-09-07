import React from "react";

//CSS Imports
import headerStyle from "./Header.module.css";
import pageStyle from "./CommonPage.module.css";
//Component imports
import TitledBg from "../Common/TitledBgContainer/TitledBackground.js";
import ImageButton from "../Common/ImageButton/ImageButton.js"

function getSunsetBg()
{
    const hours = new Date().getHours();
    return hours >= 7 && hours < 19 ? "/Images/Backgrounds/DayBackground.png" : "/Images/Backgrounds/NightBackground.png";
}

export default function Header()
{
    return (
        <div className={headerStyle.headerClass}>
            <TitledBg data=
                {
                    {
                        image: getSunsetBg(),
                        imageAlternative: "Sunset Bg",
                        title: "Lee Kee Shen",
                        description:
                            "I am a Frontend Developer and Data Scientist.I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time."
                    }
                }
            />
            <div id={headerStyle.socialMediaButtonsContainer}>
                <div id={headerStyle.socialMediaButtonsWrapper}>
                    <ImageButton
                        data=
                        {
                            {
                                imgSrc: "/Images/favicon.ico",
                                imgLink: "https://Google.com",
                            }
                        }
                    />
                    <ImageButton
                        data=
                        {
                            {
                                imgSrc: "/Images/GitHubLogo.png",
                                // imgSrc: "/Images/favicon.ico",
                                imgLink: "https://github.com/bestcolour",
                                openInNewTab:true
                            }
                        }
                    />
                    <ImageButton
                        data=
                        {
                            {
                                imgSrc: "/Images/favicon.ico",
                                imgLink: "https://Google.com",
                            }
                        }
                    />
                </div>
            </div>
        </div>

    );
}

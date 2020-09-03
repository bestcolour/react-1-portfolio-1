import React from 'react';
import style from "../../css/Header.module.css";
import pageStyle from "../../css/CommonPage.module.css";

export default function Header()
{
    return (
        <div className={style.headerClass}>

            <nav className={style.navContainer}>

                <a

                    href="https://Google.com"
                >Link1</a>
                <a href="https://Google.com">Link2</a>
                <a href="https://Google.com">Link3</a>

            </nav>

            <div
                className={style.imageContainer}

            >

                <img
                    src="/Images/Backgrounds/SunsetBackground2.png"
                />



            </div >





        </div>


    );
}

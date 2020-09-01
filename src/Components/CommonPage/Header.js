import React from 'react';
import style from "../../css/Header.module.css";
import pageStyle from "../../css/CommonPage.module.css";

export default function Header()
{
    return (
        <div className={style.headerClass}>

            <nav className={style.navWrapper}>

                {/* 
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a>
            <a href = "https://Google.com">Link1</a> */}
                <ul>
                    <li>  <a href="https://Google.com">Link1</a> </li>
                    <li> <a href="https://Google.com">Link1</a></li>
                    <li> <a href="https://Google.com">Link1</a></li>
                </ul>

            </nav>



        </div>


    );
}

import React from "react";

//CSS Imports
import headerStyle from "./Header.module.css";
import pageStyle from "./CommonPage.module.css";
//Component imports
import TitledBg from "../Common/TitledBgContainer/TitledBgContainer.js";
import NavBar from "./NavBar.js";

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
                        description:
                            "I am a Frontend Developer and Data Scientist.I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time."
                    }
                }
            />

            <NavBar data=
                {
                    {
                        linksArray:
                            [
                                "https://Google.com",
                                "https://Google.com",
                                "https://Google.com",
                            ],
                        namesArray:
                            [
                                "Google",
                                "Google",
                                "Google",
                            ],
                        appearRange:
                            [
                                { min: 0, max: 1 }
                            ]
                    }
                }
            />


            <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero ante, faucibus a rhoncus id, mollis vel dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ante tellus, accumsan vel tristique quis, finibus quis ipsum. Aliquam blandit fringilla ex in blandit. Mauris dictum erat a diam feugiat, id laoreet quam eleifend. Integer consectetur urna metus, et rutrum risus efficitur nec. Curabitur a laoreet nisi. Suspendisse eros nunc, semper vel lacinia quis, vulputate eget risus. Morbi non dui metus. Praesent ut fermentum nibh, eu aliquet lectus. Donec pellentesque vel massa vel congue. Sed mollis lectus ipsum, sit amet consequat risus fringilla et. Nunc lacus turpis, eleifend quis purus sed, aliquam cursus enim.

                Sed elit justo, posuere quis nisi id, elementum congue libero. Aliquam quis posuere turpis. Phasellus auctor libero viverra libero congue, non pellentesque ante lobortis. Fusce gravida turpis nec risus gravida molestie. Phasellus accumsan dolor sed nunc commodo, at congue risus malesuada. Praesent nisi ex, bibendum vitae feugiat a, convallis nec sapien. Nunc ac tempor ipsum. Nam sit amet interdum diam. Ut varius diam elementum nisi convallis, ac tincidunt ipsum aliquet. Nullam porta lacus sit amet mauris mattis volutpat. Integer dui ligula, pulvinar eu rutrum vel, eleifend sed erat.

                Nullam sed velit purus. Aenean porttitor, dui aliquet consequat pulvinar, sem diam feugiat sem, quis congue diam turpis nec metus. Nulla sit amet magna magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sem nisi, mollis eget urna nec, porta dapibus sapien. Pellentesque a venenatis massa. Nulla ornare tellus ac augue rutrum, id eleifend sem scelerisque. Etiam lectus nulla, ultrices et fermentum sit amet, viverra eget massa. Nulla est ligula, rhoncus eget luctus eu, blandit at magna. Maecenas vehicula massa nec ex ullamcorper, ut pulvinar orci facilisis. Ut placerat justo a sem vestibulum faucibus.

                Nunc viverra sem nec eros cursus dictum. Maecenas vulputate erat lectus, non tristique nibh aliquet quis. Donec in ligula at erat fermentum varius. In laoreet ultrices lacus, vestibulum malesuada diam rhoncus vitae. Donec sollicitudin, nisl ac laoreet efficitur, sem mauris semper arcu, vitae porttitor nisl nulla ut orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In at consectetur mauris. Curabitur odio justo, vestibulum vitae mollis quis, aliquet sed elit. Aliquam mollis tempor lectus, eu rhoncus purus ornare nec.

                Donec suscipit risus nec mauris aliquet porta. In hac habitasse platea dictumst. Maecenas et tellus ac metus mattis porttitor vitae non nibh. Pellentesque commodo, risus at fringilla tincidunt, felis dui luctus diam, at hendrerit lorem erat ac lorem. Phasellus a ex urna. Duis viverra elit nec consectetur convallis. Integer vestibulum auctor neque vel venenatis. Cras pharetra eu mauris eget posuere. Ut commodo neque nec nulla congue, nec posuere dolor lobortis. Praesent non mi vitae purus feugiat feugiat. Mauris enim felis, euismod nec ex sed, sodales interdum risus. Fusce mattis at augue vel fringilla.

            </h1>



        </div>

    );
}

const data =
{
    //Nav Data
    navData:
    {
        landPageNavBarData:
        {
            //Object properties: link (string),linkName (string), 
            //linkType(string enum kind of...) "a", "a-newTab", "routerLink", "scrollLink"
            // a: normal link which replaces the current url with a new url
            // a-newTab: normal link but opens link in new tab
            // routerLink: react-router's Link which appends a path to the domain name and hence allowing for switch rendering
            // scrollLink: react-scroll's Link which allows for smooth scrolling in a page
            centerLinksArray:
                [
                    {
                        link: "https://www.google.com/",
                        linkName: "Google",
                        linkType: "a"
                    },
                    {
                        link: "http://localhost:3000",
                        linkName: "aboutMe",
                        linkType: "a"
                    },
                    {
                        link: "https://www.google.com/",
                        linkName: "Google",
                        linkType: "a"
                    },
                    {
                        link: "http://localhost:3000",
                        linkName: "aboutMe",
                        linkType: "a"
                    },


                ]

        }
    }
    ,
    landingPageData:
    {
        //THis will hold data for both intro component & footer component
        socialMediaData:
        {
            //Object properties: buttonLink (string),buttonImg (string)
            buttonSettingsArray:
                [
                    {
                        buttonLink: "https://github.com/bestcolour",
                        buttonImg: "Images/GitHubLogo.png"
                    }
                    ,
                ]
            ,
            contactDetailsArray:
                [
                    {
                        platform: "Linked in",
                        id: "Lee Kee Shen"
                    },
                    {
                        platform: "Linked in",
                        id: "Lee Kee Shen"
                    },
                    {
                        platform: "Linked in",
                        id: "Lee Kee Shen"
                    },
                ]
        }
        ,
        aboutMeData:
        {
            imageURL: "Images/Backgrounds/DayBackground.png",
            aboutMeDescription:
                "I am a programmer"
            ,
            name: "Lee Kee Shen",
            country: "Singapore"
        }
        ,
        qualificationsData:
        {
            //Object properties: instituteName (string),educationCertificate (string), dateOfGraduation(string), otherAchievements(array of strings)
            educationExpArray:
                [
                    {
                        instituteName: "Singapore Polytechnic",
                        educationCertificate: "Diploma in Game Design & Development",
                        dateOfGraduation: "May 2021",
                        otherAchievements:
                            [
                                "Making the world green",
                                "Converting O2 to CO2"
                            ]
                    }
                    ,
                ]
            ,
            //Object properties: companyName (string),role (string), lastDayOfWork(string), otherAchievements(array of strings)
            workExpArray:
                [
                    {
                        companyName: "Singapore Polytechnic",
                        role: "Diploma in Game Design & Development",
                        lastDayOfWork: "May 2021",
                        otherAchievements: ["Making the world green"]
                    }
                    ,
                    {
                        companyName: "Singapore Polytechnic",
                        role: "Diploma in Game Design & Development",
                        lastDayOfWork: "May 2021",
                        otherAchievements: ["Making the world green"]
                    }
                    ,
                    {
                        companyName: "Singapore Polytechnic",
                        role: "Diploma in Game Design & Development",
                        lastDayOfWork: "May 2021",
                        otherAchievements: ["Making the world green"]
                    }
                ]
            ,
            //Object properties: skillName (string), skillPercentage (number)
            skillsExpArray:
                [
                    {
                        skillName: "Unity",
                        skillPercentage: 85
                    }
                    ,
                    {
                        skillName: "HTML",
                        skillPercentage: 25
                    }
                    ,
                    {
                        skillName: "CSS",
                        skillPercentage: 25
                    }
                    ,
                    {
                        skillName: "ReactJS",
                        skillPercentage: 30
                    }
                    ,

                ]
        },
        projectsData:
        {
            //Object properties: projectLink (string), projectImg (string)
            projectSettingsArray:
                [
                    {
                        projectLink: "https://github.com/bestcolour",
                        projectImg: "Images/Backgrounds/DayBackground.png"
                    }
                    , {
                        projectLink: "https://github.com/bestcolour",
                        projectImg: "Images/Backgrounds/NightBackground.png"
                    },
                    {
                        projectLink: "https://github.com/bestcolour",
                        projectImg: "Images/Backgrounds/DayBackground.png"
                    }
                    , {
                        projectLink: "https://github.com/bestcolour",
                        projectImg: "Images/Backgrounds/NightBackground.png"
                    }
                ],
        },

    }

};

export default data;
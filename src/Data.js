const data =
{
    //Nav Data
    navData:
    {
        //Object properties: link (string),linkName (string), openInNewTab(bool)
        linkSettingsArray:
            [
                {
                    link: "https://www.google.com/",
                    linkName: "Google",
                    openInNewTab: true
                },
                {
                    link: "http://localhost:3000/aboutme",
                    linkName: "aboutMe",
                    openInNewTab: true
                },

            ]

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
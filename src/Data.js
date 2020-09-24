const data =
{
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
                        id: "John Doe"
                    },
                ]
                ,
            // name: "John Doe",
            name: "John Doe",
            country: "Earth"

        }
        ,
        introData:
        {
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus ultricies lacus convallis sodales. Aenean a lacus vel lorem ullamcorper volutpat quis sit amet tortor."
        }
        ,
        aboutMeData:
        {
            imageURL: "Images/Backgrounds/DayBackground.png",
            aboutMeDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus ultricies lacus convallis sodales. Aenean a lacus vel lorem ullamcorper volutpat quis sit amet tortor. Donec condimentum auctor odio, et mattis lacus iaculis at. Sed eget massa non nisi sagittis dignissim in quis odio. "
            ,
        }
        ,
        qualificationsData:
        {
            //Object properties: instituteName (string),educationCertificate (string), dateOfGraduation(string), otherAchievements(array of strings)
            educationExpArray:
                [
                    {
                        instituteName: "Sunset High School",
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
                        companyName: "Sunset High School",
                        role: "Diploma in Game Design & Development",
                        lastDayOfWork: "May 2021",
                        otherAchievements: ["Making the world green"]
                    }
                    ,
                    {
                        companyName: "Sunset High School",
                        role: "Diploma in Game Design & Development",
                        lastDayOfWork: "May 2021",
                        otherAchievements: ["Making the world green"]
                    }
                    ,
                    {
                        companyName: "Sunset High School",
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
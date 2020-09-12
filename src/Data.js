const data =
{
    //Nav Data
    navData:
    {
        linksArray:
            [
                "https://www.google.com/",
                "https://www.google.com/",
                "http://localhost:3000/aboutme"
            ]
        ,
        namesArray:
            [
                "Google",
                "Google",
                "Google"
            ]
        ,
        linkTypeArray:
            [
                true,
                false,
                false
            ]

    }
    ,
    landingPageData:
    {
        introData:
        {
            buttonLinkArray:
                [
                    "https://github.com/bestcolour",
                    // "https://sg.linkedin.com/in/lee-kee-shen-64212018a"
                ]
            ,
            buttonImgArray:
                [
                    "Images/GitHubLogo.png",
                    // "Images/LiLogo.png"
                ]
        }
        ,
        aboutMeData:
        {
            imageURL: "Images/Backgrounds/DayBackground.png",
            aboutMeDescription :
            "I am a programmer"
            ,
            name : "Lee Kee Shen",
            country:"Singapore"
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
                    otherAchievements:["Making the world green"]
                }
                ,
                {
                    companyName: "Singapore Polytechnic",
                    role: "Diploma in Game Design & Development",
                    lastDayOfWork: "May 2021",
                    otherAchievements:["Making the world green"]
                }
                ,
                {
                    companyName: "Singapore Polytechnic",
                    role: "Diploma in Game Design & Development",
                    lastDayOfWork: "May 2021",
                    otherAchievements:["Making the world green"]
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
                {
                    skillName: "Magic",
                    skillPercentage: 25
                }
            ]
        }
    }

};

export default data;
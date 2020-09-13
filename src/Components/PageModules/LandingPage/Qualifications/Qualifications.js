import React from "react";
//Components
import LPSection from "../../../Common/LPSection";
import PercentageBar from "../../../Common/PercentageBar";
//Css 
import style from "./Qualifications.module.css";

const bottomContent = <div><hr /></div>;

function generateInfoContent(title, subTitle, date, other)
{
    const otherAchievementsJSX = [];
    for (const achievements of other)
    {
        otherAchievementsJSX.push(<li>{achievements}</li>)
    }

    return (
        <div className={style.infoHolder}>
            <h1>{title}</h1>
            <div className={style.italicsHolder}>
                <i>{subTitle} </i> • {date}
            </div>
            <ul className={style.otherAchievements}>{otherAchievementsJSX}</ul>
        </div>
    );
}

function generateSkillBar(skillName, skillPercentage)
{

    return(
        <div className = {style.skillBar}> 
            <PercentageBar percentage={skillPercentage}  name={skillName}/>
        </div>
    );
}

function generateLeftContent(title)
{
    return (<div className={style.qualificationNameHolder}>
        <h1 >
            {title}
        </h1>
    </div>);
}

export default function Qualifications(props)
{
    const { educationExpArray, workExpArray, skillsExpArray } = props.data;
    const eduRightContent = [], workRightContent = [], skillsRightContent = [];

    const eduLeftContent = generateLeftContent("Education");
    const workLeftContent = generateLeftContent("Work");
    const skillsLeftContent = generateLeftContent("Skills");

    //Handles education
    for (const data of educationExpArray)
    {
        const jsxToPush = generateInfoContent
            (
                data.instituteName,
                data.educationCertificate,
                data.dateOfGraduation,
                data.otherAchievements
            );


        eduRightContent.push(jsxToPush);
    }



    //Handles work experience
    for (const data of workExpArray)
    {
        const jsxToPush = generateInfoContent
            (
                data.companyName,
                data.role,
                data.lastDayOfWork,
                data.otherAchievements
            );

        workRightContent.push(jsxToPush);
    }


    //Handles Skill experience
    for (const data of skillsExpArray)
    {
        const jsxToPush = generateSkillBar(data.skillName, data.skillPercentage);
        skillsRightContent.push(jsxToPush);
    }



    return (
        <div id = {style.allQualifications}>
            <LPSection leftContent={eduLeftContent} rightContent={eduRightContent} bottomContent={bottomContent} />
            <LPSection leftContent={workLeftContent} rightContent={workRightContent} bottomContent={bottomContent} />
            <LPSection leftContent={skillsLeftContent} rightContent={skillsRightContent} />
        </div>
    );
}
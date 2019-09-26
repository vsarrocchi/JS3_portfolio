import React from "react"
import skillsStyles from "./skills.module.css"

export default () => {
return (
    <div className="section" className={skillsStyles.container} id="skills">
        <div className={skillsStyles.box}>
            <h1 id="skillsTitle" className={skillsStyles.title}>Skills</h1>
            <div className={skillsStyles.bar + ' ' + skillsStyles.intermediate} data-skill="JavaScript"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.advanced} data-skill="HTML5"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.intermediate} data-skill="CSS3/Sass"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.basic} data-skill="jQuery"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.learning} data-skill="PHP/SQL/MySQL"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.learning} data-skill="Gatsby/React"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.learning} data-skill="Jekyll"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.basic} data-skill="Photoshop/Illustrator/XD/Figma/Gimp"></div>
        </div>
    </div>
  )
}
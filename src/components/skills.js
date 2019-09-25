import React from "react"
import skillsStyles from "./skills.module.css"

export default () => {
return (
    <div className="nav" className={skillsStyles.container} id="skills">
        <div className={skillsStyles.box}>
            <h1 className={skillsStyles.title}>Skills</h1>
            <div className={skillsStyles.bar + ' ' + skillsStyles.learning} data-skill="jQuery"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.basic} data-skill="PHP"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.intermediate} data-skill="JavaScript"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.advanced} data-skill="CSS3"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.expert} data-skill="HTML5"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.learning} data-skill="jQuery"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.basic} data-skill="PHP"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.intermediate} data-skill="JavaScript"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.advanced} data-skill="CSS3"></div>
            <div className={skillsStyles.bar + ' ' + skillsStyles.expert} data-skill="HTML5"></div>
            
        </div>
    </div>
  )
}
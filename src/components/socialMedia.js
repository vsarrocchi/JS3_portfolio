import React from "react"
import socialMediaStyles from "./socialMedia.module.css"

export default () => (
    <div className={socialMediaStyles.contact}>
        <a className={socialMediaStyles.box} href="https://github.com/vsarrocchi" target="_blank"><i className="fab fa-github"></i></a>
        <a className={socialMediaStyles.box} href="https://linkedin.com/in/valesca-sarrocchi" target="_blank"><i className="fab fa-linkedin"></i></a>
        <a className={socialMediaStyles.box} href="mailto:valesca.sarrocchi.s@gmail.com"><i className="fa fa-envelope"></i></a>
    </div>
)
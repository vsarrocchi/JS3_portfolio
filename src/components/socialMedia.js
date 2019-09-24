import React from "react"
import socialMediaStyles from "./socialMedia.module.css"

export default () => (
    <div className={socialMediaStyles.container}>
      <div className={socialMediaStyles.box}>
        <div className={socialMediaStyles.contact}>
            <a href="https://github.com/vsarrocchi" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/valesca-sarrocchi" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:valesca.sarrocchi.s@gmail.com"><i className="fa fa-envelope"></i></a>
        </div>
      </div>
    </div>
)
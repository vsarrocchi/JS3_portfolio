import React from "react"
import aboutStyles from "./about.module.css"

export default () => {
return (
    <div className="section" className={aboutStyles.aboutContainer} id="about">
        <div className={aboutStyles.aboutBox}>
            <div className="parallax profilImage" data-direction="Y(" data-mult="0.5">
                <img src={"/images/profilbild.jpg"} alt="profilbild" />
            </div>
            <div className="parallax text" data-mult="0.3" data-direction="Y(">
                <h1 className={aboutStyles.title}>About me</h1>
                <h3 className={aboutStyles.paragraph}>Maecenas tincidunt aliquet enim et facilisis. Aliquam non tellus metus. Vivamus eget euismod justo. Donec eu dolor sit amet urna pellentesque commodo vitae et metus. In at dignissim nisi, eget consequat libero. Pellentesque mauris orci, ultrices sit amet mattis a, semper ac nulla. Sed sem sapien, posuere et maximus non, suscipit sit amet est. Mauris non nunc nibh.</h3>
            </div>
        </div>
    </div>
  )
}






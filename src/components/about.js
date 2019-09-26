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
                <h3 className={aboutStyles.paragraph}>I am a FrontEnd developer student at Nackademin in Stockholm who is currently looking for an internship. I have just finished the first year of the program. During this time I gained experience working with JavaScript, jQuery, JSON, HTML, CSS, Git, GitHub, Bootstrap, Sass, PHP, SQL, WordPress, Photoshop and Illustrator, among other skills.</h3>
            </div>
        </div>
    </div>
  )
}






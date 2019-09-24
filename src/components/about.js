import React from "react"
import aboutStyles from "./about.module.css"
// import { useStaticQuery, graphql } from "gatsby"

export default () => {
//   const data = useStaticQuery(graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
return (
    <div className={aboutStyles.aboutContainer} id="about">
        {/* <h1>{data.site.siteMetadata.title}</h1> */}
        <div className={aboutStyles.aboutBox}>
            <div className={aboutStyles.profilImage}>
                <img src={"/images/profilbild.jpg"} alt="profilbild" />
            </div>
            <div className={aboutStyles.text}>
                <h1 className={aboutStyles.title}>About me</h1>
                <h3 className={aboutStyles.paragraph}>Maecenas tincidunt aliquet enim et facilisis. Aliquam non tellus metus. Vivamus eget euismod justo. Donec eu dolor sit amet urna pellentesque commodo vitae et metus. In at dignissim nisi, eget consequat libero. Pellentesque mauris orci, ultrices sit amet mattis a, semper ac nulla. Sed sem sapien, posuere et maximus non, suscipit sit amet est. Mauris non nunc nibh.</h3>
            </div>
        </div>
    </div>
  )
}






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
        <h1>About</h1>
    </div>
  )
}






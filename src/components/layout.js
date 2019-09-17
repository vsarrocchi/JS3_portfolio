import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={layoutStyles.layout}>
      {children}
      <Link to="/">
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
    </div>)
}

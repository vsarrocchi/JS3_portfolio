import React from "react"
// import { Link } from "gatsby"
import { useStaticQuery, Link, graphql } from "gatsby"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

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

  return (<div>
    <header>
      <Link to="/">
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/my-files/">My Files</ListLink>
      </ul>
    </header>
    {children}
  </div>)
}

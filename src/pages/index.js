import React from "react"
// import { Link, graphql } from "gatsby"
import Header from "../components/header"
import Container from "../components/container"
import logo from "../images/logo.png"
import homeImage from "../images/home-image.png"

export default () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p>Hello! I'm</p>
          <h1>Valesca Sarrocchi</h1>
          <h2>FrontEnd Developer Student</h2>
        </div>
        <div>
          <img src={homeImage} alt="logo" />
        </div>
      </Container>
      {/* post code */}
      {/* <Container>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}{" "}<span> — {node.frontmatter.date}</span></h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}

      </Container> */}
    </div>
  )
}

// Post code
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
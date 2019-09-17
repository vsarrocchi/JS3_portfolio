import React from "react"
import { graphql } from "gatsby"
import TitleOne from "../components/title-one"
import Header from "../components/header"
import Container from "../components/container"

export default ({ data }) => (
  <div>
    <Header />
    <Container>
      <h1>About {data.site.siteMetadata.title}</h1>
      <div>
        <TitleOne titleOneText="About Gatsby"/>
        <TitleOne titleOneText="It's pretty cool" />
        <p>Such wow. Very React.</p>
      </div>
    </Container>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
import React from "react"
import { graphql } from "gatsby"
import TitleOne from "../components/title-one"
import Layout from "../components/layout"
import Header from "../components/header"

export default ({ data }) => (
  <Layout>
    <Header />
    <h1>About {data.site.siteMetadata.title}</h1>
    <div>
      <TitleOne titleOneText="About Gatsby"/>
      <TitleOne titleOneText="It's pretty cool" />
      <p>Such wow. Very React.</p>
    </div>
  </Layout>
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
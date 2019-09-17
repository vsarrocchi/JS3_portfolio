import React from "react"
import TitleOne from "../components/title-one"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <Header />
    <div>
      <TitleOne titleOneText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)
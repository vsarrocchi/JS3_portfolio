import React from "react"
import TitleOne from "../components/title-one"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <Header />
    <div>
      <TitleOne titleOneText="Portfolio" />
    </div>
  </Layout>
)
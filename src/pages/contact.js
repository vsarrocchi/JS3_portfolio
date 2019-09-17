import React from "react"
import TitleOne from "../components/title-one"
import Header from "../components/header"
import Container from "../components/container"

export default () => (
  <div>
    <Header />
    <Container>
      <TitleOne titleOneText="Contact" />
      <p>Send us a message!</p>
    </Container>
  </div>
)
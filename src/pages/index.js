import React from "react"
import { Helmet } from "react-helmet"
import Container from "../components/container"
import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <Helmet />
      <Header />
      <Container>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />      
    </div>
  )
}
import React from "react"
import { Helmet } from "react-helmet"
// import Container from "../components/container"
import Header from "../components/header"
import Home from "../components/home"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="/script.js"></script>
        <script src="/google-map.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOb0lovvkv92GzXlph-xP8f00lE9apfG8&callback=initMap" 
                async
                defer></script>
      </Helmet>
      <Header />
      {/* <Container> */}
        <Home />
        <About />
        <Portfolio />
        <Contact />
      {/* </Container> */}
      <Footer />
    </div>
  )
}

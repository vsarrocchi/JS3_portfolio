import React from "react"
import portfolioStyles from "./portfolio.module.css"
import image1 from "../images/artgallery.png"
import image2 from "../images/flexboxgrid.png"
import image3 from "../images/grafikverktig2.jpg"
import image4 from "../images/journal.png"
import image5 from "../images/superhero.png"
import image6 from "../images/webshop.png"
import image7 from "../images/band-site.png"

export default () => (
  <div className={portfolioStyles.portfolioContainer} id="portfolio">
      <div className={portfolioStyles.portfolioBox}>
          <h1>Portfolio</h1>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image1} alt="art gallery" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image2} alt="flexbox grid" /> 
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image3} alt="grafikverktig 2" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image4} alt="php journal" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image5} alt="superhero" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image6} alt="webshop" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={image7} alt="band site" />          
          </div>
      </div>
  </div>
)
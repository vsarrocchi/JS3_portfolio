import React from "react"
import portfolioStyles from "./portfolio.module.css"

export default () => (
  <div className={portfolioStyles.portfolioContainer} id="portfolio">
      <div className={portfolioStyles.portfolioBox}>
          <h1>Portfolio</h1>
          {/* <div className={portfolioStyles.imagesStyle + ' ' + portfolioStyles.portfolioContainer}>
            <img src={"/images/artgallery.png"} alt="art gallery" />
          </div> */}
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/artgallery.png"} alt="art gallery" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/flexboxgrid.png"} alt="flexbox grid" /> 
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/journal.png"} alt="php journal" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/superhero.png"} alt="superhero" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/webshop.png"} alt="webshop" />
          </div>
          <div className={portfolioStyles.imagesStyle}>
            <img src={"/images/band-site.png"} alt="band site" />          
          </div>
      </div>
  </div>
)
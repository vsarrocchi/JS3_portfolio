import React from "react"
import portfolioStyles from "./portfolio.module.css"

export default () => (
  <div className="nav" className={portfolioStyles.portfolioContainer} id="portfolio">
      <h1 className={portfolioStyles.title}>Portfolio</h1>
      <div className={portfolioStyles.portfolioBox}>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/artgallery.png"} alt="art gallery" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/flexboxgrid.png"} alt="flexbox grid" /> 
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/journal.png"} alt="php journal" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/superhero.png"} alt="superhero" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/webshop.png"} alt="webshop" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/band-site.png"} alt="band site" />          
          </div>
          <div className={portfolioStyles.imageBox}>
            <img src={"/images/artgallery.png"} alt="art gallery" />
          </div>
      </div>
  </div>
)
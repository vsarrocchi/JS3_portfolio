import React from "react"
import portfolioStyles from "./portfolio.module.css"

export default () => (
  <div className={portfolioStyles.portfolioContainer} id="portfolio">
      <h1 className={portfolioStyles.title}>Portfolio</h1>
      <div className={portfolioStyles.portfolioBox}>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/flexboxgrid.png"} alt="flexbox grid" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/journal.png"} alt="php journal" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/superhero.png"} alt="superhero" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/webshop.png"} alt="webshop" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/band-site.png"} alt="band site" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </a>
      </div>
  </div>
)
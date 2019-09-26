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
            <figure>
                <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/artgallery.png"} alt="art gallery" /> 
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/flexboxgrid.png"} alt="flexbox grid" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/flexboxgrid.png"} alt="flexbox grid" /> 
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/journal.png"} alt="php journal" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/journal.png"} alt="php journal" />
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/superhero.png"} alt="superhero" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/superhero.png"} alt="superhero" />
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/webshop.png"} alt="webshop" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/webshop.png"} alt="webshop" />
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/band-site.png"} alt="band site" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/band-site.png"} alt="band site" />          
            </figure>
          </div> */}
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Thunder</h1>
            </span>
            <figure>
                <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </a>
          {/* <div className={portfolioStyles.imageBox}>
            <figure>
              <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </div> */}

          
          {/* <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/artgallery.png"} alt="art gallery" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/flexboxgrid.png"} alt="flexbox grid" /> 
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/journal.png"} alt="php journal" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/superhero.png"} alt="superhero" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/webshop.png"} alt="webshop" />
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/band-site.png"} alt="band site" />          
          </div>
          <div className={portfolioStyles.imageBox}>
            <img className="parallax" data-direction="Y(-" data-mult="0.1" src={"/images/artgallery.png"} alt="art gallery" />
          </div> */}
      </div>
  </div>
)
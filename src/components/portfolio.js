import React from "react"
import portfolioStyles from "./portfolio.module.css"

export default () => (
  <div className={portfolioStyles.portfolioContainer} id="portfolio">
      <h1 className={portfolioStyles.title}>Portfolio</h1>
      <div className={portfolioStyles.portfolioBox}>
          <a href="https://vsarrocchi.github.io/FrontendProjekt-Projekt2/" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Live Art Gallery</h1>
                <p>HTML/CSS/JavaScript</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/artgallery.png"} alt="art gallery" />
            </figure>
          </a>
          <a href="https://vsarrocchi.github.io/Projektarbete-HTML-CSS/" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Flexbox vs Grid</h1>
                <p>HTML/CSS/Sass</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/flexboxgrid.png"} alt="flexbox grid" />
            </figure>
          </a>
          <a href="/images/grafikverktig.jpg" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Art Gallery - Mockup</h1>
                <p>Photoshop/Illustrator</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/grafikverktig2.jpg"} alt="grafikverktig 2" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Journal</h1>
                <p>PHP/SQL/MySQL/HTML/CSS/Bootstrapp</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/journal.png"} alt="php journal" />
            </figure>
          </a>
          <a href="https://mmdarrah.github.io/SuperHero4rent/" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>SuperHero for hire</h1>
                <p>JavaScript/JSON/HTML/CSS/Sass</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/superhero.png"} alt="superhero" />
            </figure>
          </a>
          <a href="https://lezcodeher.github.io/project-webshop/" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Life Hacks - Webshop</h1>
                <p>JavaScript/jQuery/XML/AJAX/JSON/Bootstrapp</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/webshop.png"} alt="webshop" />
            </figure>
          </a>
          <a href="https://flamboyant-curie-65a21c.netlify.com/" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>Band Site - Bob Marley</h1>
                <p>Jekyll/Netlify/Sass/JavaScript</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/band-site.png"} alt="band site" />
            </figure>
          </a>
          <a href="#" className={portfolioStyles.box}>
            <span className={portfolioStyles.text}>
                <h1>This Portfolio</h1>
                <p>Gatsby/Netlify/JavaScript/CSS</p>
            </span>
            <figure className={portfolioStyles.figureImage}>
                <img src={"/images/js3_portfolio.png"} alt="portfolio" />
            </figure>
          </a>
      </div>
  </div>
)
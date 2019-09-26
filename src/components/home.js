import React from "react"
import homeStyles from "./home.module.css"

export default () => (
    <div id="home" className="section" data-section="home" className={homeStyles.homeContainer}>
      <div className={homeStyles.homeBox}>
        <div className={homeStyles.homeColumn1}>
          <div className={homeStyles.logo}>
              <img src={"/images/logo4.png"} alt="logo" />
          </div>
          <div className={homeStyles.homeInfo}>
            <h1 className={homeStyles.title}>Valesca Sarrocchi</h1>
            <h2 id="ml3">FrontEnd Developer Student</h2>
          </div>
        </div>
        <div className={homeStyles.homeColumn2}>
            <img src={"/images/homepage.png"} alt="home" />
        </div>
      </div>
    </div>
)
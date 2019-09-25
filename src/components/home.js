import React from "react"
import homeStyles from "./home.module.css"

export default () => (
    <div className="nav" className={homeStyles.homeContainer}>
      <div className={homeStyles.homeBox}>
        <div className={homeStyles.homeColumn1}>
          <div className={homeStyles.logo}>
              <img src={"/images/logo4.png"} alt="logo" />
          </div>
          <div className={homeStyles.homeInfo}>
            {/* <p>Hello! I'm</p> */}
            <h1 className={homeStyles.title}>Valesca Sarrocchi</h1>
            <h2>FrontEnd Developer Student</h2>
          </div>
        </div>
        <div className={homeStyles.homeColumn2}>
            <img src={"/images/home-image-2.png"} alt="home" />
        </div>
      </div>
    </div>
)
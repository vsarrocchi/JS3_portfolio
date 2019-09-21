import React from "react"
import homeStyles from "./home.module.css"
import logo from "../images/logo.png"
import homeImage from "../images/home-image.png"

export default () => (
    <div className={homeStyles.homeContainer}>
      <div className={homeStyles.homeBox}>
        <div className={homeStyles.homeColumn1}>
          <div className={homeStyles.homeInfo}>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p>Hello! I'm</p>
            <h1>Valesca Sarrocchi</h1>
            <h2>FrontEnd Developer Student</h2>
          </div>
        </div>
        <div className={homeStyles.homeColumn2}>
          <img className={homeStyles.homeImage} src={homeImage} alt="home" />
        </div>
      </div>
    </div>
)
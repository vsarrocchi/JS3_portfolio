import React from "react"
import homeStyles from "./home.module.css"

export default () => (
    <div className={homeStyles.homeContainer}>
      <div className={homeStyles.homeBox}>
        <div className={homeStyles.homeColumn1}>
          <div className={homeStyles.homeInfo}>
            <div className={homeStyles.logo}>
              <img src={"/images/logo3.png"} alt="logo" />
            </div>
            <p>Hello! I'm</p>
            <h1>Valesca Sarrocchi</h1>
            <h2>FrontEnd Developer Student</h2>
          </div>
        </div>
        {/* <div className={homeStyles.homeColumn2}>
          <img className={homeStyles.homeImage} src={homeImage} alt="home" />
        </div> */}
      </div>
    </div>
)
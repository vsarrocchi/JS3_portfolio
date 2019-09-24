import React from "react"
import containerStyles from "./container.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>
    {/* <div className={containerStyles.box1}></div>
    <div className={containerStyles.box2}></div>
    <div className={containerStyles.box3}></div> */}
    {children}
  </div>
)

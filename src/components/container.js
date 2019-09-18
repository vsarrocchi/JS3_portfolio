import React from "react"
import { Helmet } from "react-helmet"
import containerStyles from "./container.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>
    <Helmet>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"></link>
    </Helmet>
    {children}
  </div>
)

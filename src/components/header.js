import React from "react"
import {Link} from "gatsby"
import headerStyles from "./header.module.css"
// import logo from "../images/logo.png"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
  
export default({ children }) => {
    return (
        <div className={headerStyles.header}>
            {/* <div className={headerStyles.logo}>
                <img src={logo} alt="logo" />
            </div> */}
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about">About</ListLink>
                <ListLink to="/portfolio">Portfolio</ListLink>
                <ListLink to="/contact">Contact</ListLink>
                <ListLink to="/my-files">My Files</ListLink>
            </ul>
            {children}
        </div>
    )
}

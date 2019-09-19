import React from "react"
import {Link} from "gatsby" 
import headerStyles from "./header.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
  
export default({ children }) => {
    return (
        <div className={headerStyles.header}>
            <ul>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li> */}
                <ListLink to="/">Home</ListLink>
                <ListLink to="#about">About</ListLink>
                <ListLink to="#portfolio">Portfolio</ListLink>
                <ListLink to="#contact">Contact</ListLink>
                {/* <ListLink to="/my-files">My Files</ListLink> */}
            </ul>
            {children}
        </div>
    )
}

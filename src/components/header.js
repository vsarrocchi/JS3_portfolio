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
        <div className={headerStyles.headerBox} id="main-header">
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/#about">About</ListLink>
                <ListLink to="/#portfolio">Portfolio</ListLink>
                <ListLink to="/#contact">Contact</ListLink>
            </ul>
            {children}
        </div>
    )
}

import React from "react"
import {Link} from "gatsby" 
import headerStyles from "./header.module.css"

const ListLink = props => (
  <li className="nav-item active-link">
    <Link className="nav-link" to={props.to}>{props.children}</Link>
  </li>
)
  
export default() => {
    return (
        <div className="page-navigation" className={headerStyles.headerBox} id="main-header">
            <a href="/" id="dropDownElement" className={headerStyles.mobilNav}>
                <i className="fa fa-bars" id="bars-icon"></i>
                <span id="cross-icon">&#x2573;</span>
            </a>
            <ul className="nav justify-content-center" id="nav">
                <ListLink to="/">Home</ListLink>
                <ListLink to="/#about">About</ListLink>
                <ListLink to="/#skills">Skills</ListLink>
                <ListLink to="/#portfolio">Portfolio</ListLink>
                <ListLink to="/#contact">Contact</ListLink>
            </ul>
        </div>
    )
}



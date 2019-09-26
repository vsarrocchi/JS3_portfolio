import React from "react"
import footerStyles from "./footer.module.css"
import {Link} from "gatsby"
  
export default({ children }) => {
    return (
        <div className={footerStyles.footer}>
            <div>
                <Link to="/#" className={footerStyles.scrollTop}>
                    <i className="fas fa-angle-up"></i>
                </Link>
            </div>
            <p>Built by Valesca Sarrocchi</p>
            {children}
        </div>   
    )
}
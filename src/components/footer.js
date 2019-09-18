import React from "react"
import footerStyles from "./footer.module.css"
  
export default({ children }) => {
    return (
        <div className={footerStyles.footer}>
            <div>
                <a href="#" class="scrollTop">
                    <i class="fas fa-angle-up"></i>
                </a>
            </div>
            <p>Built by Valesca Sarrocchi</p>
            {children}
        </div>   
    )
}
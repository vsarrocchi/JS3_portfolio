import React from "react"
import contactStyles from "./contact.module.css"

export default () => (
    <div className="section" className={contactStyles.contactContainer} id="contact">
        <div className={contactStyles.contactBox}>
            <div className={contactStyles.contactForm}>
                <form>
                    <h1 className="ml6 title">
                        <span className="text-wrapper">
                            <span className="letters">Contact me</span>
                        </span>
                    </h1>
                    <div className={contactStyles.row}>
                        <input className={contactStyles.input1 + ' ' + contactStyles.input} placeholder="Name" type="text" name="name" /> 
                        <input className={contactStyles.input2 + ' ' + contactStyles.input} placeholder="Email" type="email" name="email" />
                    </div>
                    <input className={contactStyles.input3 + ' ' + contactStyles.input} placeholder="Subject" type="text" name="subject" />
                    <textarea className={contactStyles.textArea + ' ' + contactStyles.input} placeholder="Message" name="msg"></textarea>
                    <input className={contactStyles.submitBtn} id="submit" type="submit" value="SEND"/>
                </form>
            </div>
            <div className={contactStyles.contactMap} id="map">
            </div>
        </div>
    </div>
)
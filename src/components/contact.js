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
                        <input className={contactStyles.input1} placeholder="Name" type="text" name="name" /> 
                        <input className={contactStyles.input2} placeholder="Email" type="email" name="email" />
                    </div>
                    <input className={contactStyles.input3} placeholder="Subject" type="text" name="subject" />
                    <textarea className={contactStyles.textArea} placeholder="Message" name="msg"></textarea>
                    <input className={contactStyles.submitBtn} id="submit" type="submit" value="SEND"/>
                </form>
            </div>
            <div className={contactStyles.contactMap} id="map">
                {/* <iframe title="sverige karta" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130266.39963613081!2d17.841971349579072!3d59.32606681413215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e0!3m2!1ssv!2sse!4v1569127515725!5m2!1ssv!2sse">
                </iframe> */}
            </div>
        </div>
    </div>
)
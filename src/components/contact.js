import React from "react"
import contactStyles from "./contact.module.css"

export default () => (
    <div className={contactStyles.contactContainer} id="contact">
        <div className={contactStyles.contactBox}>
            <div className={contactStyles.contactForm}>
                <h1>Contact me</h1>
                <form id="contact">
                    <ul>
                        <li>
                            <input placeholder="Name" type="text" name="name" /> 
                            <label></label>
                        </li>
                        <li> 
                            <input placeholder="Email" type="email" name="email" /> 
                            <label></label>
                        </li>
                        <li> 
                            <input placeholder="Subject" type="text" name="subject" /> 
                            <label></label>
                        </li>
                        <li>
                            <textarea placeholder="Message" name="msg"></textarea>
                            <label></label>
                        </li>
                        <li className="submit"> 
                            {/* <input type="hidden" name="ip" value="85.226.138.151"></input> */}
                            <input id="submit" type="submit" value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div className={contactStyles.contactMap}>
                <iframe title="sverige karta" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7737117.882063874!2d8.441152656484281!3d61.7420879665662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465cb2396d35f0f1%3A0x22b8eba28dad6f62!2sSverige!5e0!3m2!1ssv!2sse!4v1569089411194!5m2!1ssv!2sse">
                </iframe>
            </div>
        </div>
    </div>
)
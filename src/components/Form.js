import React from 'react'
import './Form.css'

const Form = (props) => (
                <form name="contact" method="post" action="halifaxnutrition.com/success" data-netlify="true" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="bot-field" />

                    <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                    <div className='field'>
                    <label className='Form--Label has-arrow'>
                        <select
                            className='Form--Input Form--Select'
                            name='type'
                            defaultValue='Type of Enquiry'
                            required
                        >
                            <option disabled hidden>
                            Type of Enquiry
                            </option>
                            <option>Need to know more</option>
                            <option>Found a bug</option>
                            <option>Want to say hello</option>
                        </select>
                    </label>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Comments</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                    </ul>
                </form>
)

export default Form
import React from 'react'
import './FormSection.css'

const FormSection = (props) => (
    <section id="contact">
            <section className='text-section'>
                <h2>Take charge of your nutrition</h2>
                <h3>Nutrition counselling services</h3>
                <p>Learning waht to do to maximize your hardwork is half the battle with nutrition.
                    We've seen countless success stories from people who were looking
                    to make a change to their health goals.
                </p>
            </section>
            <section className='form-section'>
                <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

                    <input type="hidden" name="bot-field" />

                    <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                    </ul>
                </form>
            </section>
    </section>
)

export default FormSection
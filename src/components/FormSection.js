import React from 'react'
import './FormSection.css'
import Form from '../components/Form'

const FormSection = (props) => (
    <section id="contact">
            <section className='text-section'>
                <h2>What We Do</h2>
                <h3>We're simply connecting you with the right Dietitian - quickly.</h3>
                <p>
                    We're not Dietitians, we're just passionate about helping people 
                    find the answers they're looking for in the nutrition world. 
                </p>
                <p>
                    Right now, if you needed the help of a Dietitian and went through the public system
                    you could be waitting more than 3 months to simply meet with someone. 
                    If you or a loved one is dealing with health problems or feel vulnerable or simply
                    motivated, you need to see someone right away.
                </p>
                <h3>Talk to a Dietitian today</h3>
                <p>
                    If you're ready to take the next step, there is no better time to start than today. Fill out the form and we'll be in touch shockingly fast.
                    
                </p>
            </section>
            <section className='form-section'>
                <Form />
            </section>
    </section>
)

export default FormSection
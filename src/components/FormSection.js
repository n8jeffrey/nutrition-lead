import React from 'react'
import './FormSection.css'
import Form from '../components/Form'

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
                <Form />
            </section>
    </section>
)

export default FormSection
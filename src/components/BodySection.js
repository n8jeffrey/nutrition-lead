import React from 'react'
import './BodySection.css'
import Content from './Content'
import Image from './Image'

const BodySection = (props) => (
    <div className='faq-section'>
        <div className='image-section'>
        <img
          background
          resolutions="large"
          src={props.backgroundImage}
          alt={props.title}
          size="cover"
        />
        </div>
        <div className='text-section'>
          <Content source={props.body} />
        </div>
    </div>
)

export default BodySection
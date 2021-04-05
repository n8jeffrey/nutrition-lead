import React from 'react'
import './QuoteSection.css'

const QuoteSection = (props) => (
    <div className='quote-header'>
        <h3>{props.quote}</h3>
    </div>
)

export default QuoteSection
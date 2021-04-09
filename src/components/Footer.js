import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      <a href="https://halifaxnutrition.com/#contact">Get In Touch With Us.</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://n8jeffrey,dev/">n8te</a>.
        </span>
      </div>
    </footer>
  </div>
)

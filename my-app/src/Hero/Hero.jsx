import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
          <div className="left__card">
        <h1>We Help Grow Your Business</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className="buttons">
            <div className="contact">Contact Us</div>
        <div className="watch__video">watch the video</div>
        </div>
      </div>
      <div className="right__card">
        <img src="https://preview.colorlib.com/theme/financier/images/img_6.jpg.webp" alt="my photo" />
      </div>
    
    </div>
  )
}

export default Hero

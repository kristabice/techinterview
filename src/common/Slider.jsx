import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
// import SimpleImageSlider from "react-simple-image-slider";

import heroImage from '../assets/hero.jpg'
import notebook from '../assets/notebook.jpg'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  const [slides, setSlides] = useState([
    {url: heroImage, alt: "wand and book sale image", hideSlide: false},
    {url: notebook, alt: "fancy notebook", hideSlide: true}
  ])

  useEffect(() => {
    showSlides(slideIndex)
  }, [])

  const plusSlides = (n) => {
    if(slideIndex + n > slides.length)
      showSlides(slideIndex - 1)
    else if(slideIndex + n < slides.length)
      showSlides(slideIndex - 1)
    else
      showSlides(slideIndex + n)
  }

  const currentSlide = (n) => {
    showSlides(n);
  }

  const showSlides = (n) => {
    setSlideIndex(n)
    let newSlides = [...slides]

    if (n > newSlides.length) {setSlideIndex(1)}
    if(n < 1) { setSlideIndex(slides.length)}
    
    newSlides.map(slide => slide.hideSlide = true)
    newSlides[slideIndex-1].hideSlide = false;  

    setSlides(newSlides)

  }

  return (
    <div className='slider'>
      {slides.map((image, idx) => (
        <div key={idx} className={classNames('mySlides', 'fade', {show: !image.hideSlide}, {hide: image.hideSlide})}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
      <a className='prev' onClick={() => plusSlides(-1)}>❮</a>
      <a className='next' onClick={() => plusSlides(1)}>❯</a>

      <div className="dots">
      {slides.map((slide, idx) => (
        <span
        key={idx} 
        onClick={() => currentSlide(idx)} 
        className={classNames("dot", {active: slideIndex -1 === idx})}
        />
        ))}
      </div>
    </div>
  )
}

export default Slider
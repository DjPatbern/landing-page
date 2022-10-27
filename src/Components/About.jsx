import React from 'react'

function About(props) {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={props.image} alt=" " />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Itaque rem nesciunt aperiam iure, officia dolorum placeat doloribus optio eligendi quasi, 
            officiis tenetur. Nihil temporibus ex vitae minus facere cumque nisi.</p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About

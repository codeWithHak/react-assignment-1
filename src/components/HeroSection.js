import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <h1>Discover Pakistan</h1>
        <p>What's holding you back?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Begin now.</Button> 

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Watch Trailer <i className='fa-play-circle'></i></Button>  
        </div>
    </div>
  )
}

export default HeroSection;
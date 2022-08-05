import React, {useState, useEffect, useRef} from 'react'
// import {gsap } from 'gsap';

export default function Homepage() {

    // For the "contact me" hover effect
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
                <div className="homepage">
                    <div className="homepage-text">
                        <div className="homepage-title">
                            <h1 className="title">
                                <div className="hero-content-line link">Hey i’m Thomas, </div>
                                <div className="hero-content-line link">a web developer </div>
                                <div className="hero-content-line link">based in Paris, France</div>
                            </h1>
                        </div>
                        <div className="homepage-contact">
                        <img className="arrow" src="./images/right-arrow-svgrepo-com.svg" alt=""></img>
                            <div 
                            onMouseOver={handleMouseOver} 
                            onMouseOut={handleMouseOut} 
                            className="contactme" 
                            onClick={() =>  navigator.clipboard.writeText('thomashaudiquer@gmail.com')}>
                                {isHovering ? 'Copy email?' : 'Contact me'}
                            </div>
                        </div>
                </div>
            </div>
    )
}
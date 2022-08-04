import React, {useState, useEffect, useRef} from 'react'
import { TweenMax } from 'gsap';

export default function Homepage() {

    // For the fade in effect
    let app = useRef(null);
    useEffect(() => {
        TweenMax.to(app, 0, {css: {visibility: 'visible'}});
    }, [])

    // For the "contact me" hover effect
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
                <div className="homepage" ref={el => app = el}>
                    <div className="homepage-text">
                        <div className="homepage-title">
                        <h1 className="title">Hey i’m Thomas, a web developer based in Paris, France</h1>
                        </div>
                        <div className="homepage-contact">
                        <img className="arrow" src="./images/right-arrow-svgrepo-com.svg" alt=""></img>
                        <div 
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut} 
                        className="contactme" 
                        onClick={() =>  navigator.clipboard.writeText('thomashaudiquer@gmail.com')}>
                            {isHovering ? 'Copy email?' : 'Contact me'}</div>
                        </div>
                </div>
            </div>
    )
}
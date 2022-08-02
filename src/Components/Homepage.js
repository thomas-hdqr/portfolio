import React, {useState} from 'react'

export default function Homepage() {
    
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <div className="homepage">
            <div className="gradient-wrap">
                <div className="meshgradient">
                    <div className="color c1"></div>
                    <div className="color c2"></div>
                    <div className="color c3"></div>
                    <div className="color c4"></div>
                    </div>
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
        </div>
    )
}
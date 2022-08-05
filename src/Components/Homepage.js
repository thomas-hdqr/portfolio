import React, {useState, useEffect, useRef} from 'react'
import {gsap } from 'gsap';

export default function Homepage() {

    // For the fade in effect
    let app = useRef(null);
    let content = useRef(null);
    let tl = gsap.timeline({delay: .8});


    
    
    useEffect(() => {

        // Content Vars
        const headlineFirst = content.children[0].children[0].children[0];
        const headlineSecond = content.children[0].children[0].children[1];
        const headlineThird = content.children[0].children[0].children[2];
        const contactArrow = content.children[1].children[0];
        const contactMe = content.children[1].children[1];


        // Remove inti flash
        gsap.to(app, 0, {css: {stagger: 0, visibility: 'visible'}});


        // console log for testing
        console.log(headlineFirst)
        console.log(headlineSecond)
        console.log(headlineThird)
        console.log(contactArrow)
        console.log(contactMe)


        // Content Animation
        tl.from([headlineFirst, headlineSecond, headlineThird], 1, {
            y: 44,
            ease: "power3.inOut",
            delay: .8,
        }, .15)
        .from(contactArrow, 1, {y: 20, opacity: 1, ease: "power3.inOut"}, 1.4)
        .from(contactMe, 1, {y: 20, opacity: 1, ease: "power3.inOut"}, 1.6)

    }, [tl])



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
                    <div className="homepage-text" ref={el => content = el}>
                        <div className="homepage-title">
                            <h1 className="title">
                                <div className="hero-content-line">Hey i’m Thomas, </div>
                                <div className="hero-content-line">a web developer </div>
                                <div className="hero-content-line">based in Paris, France</div>
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
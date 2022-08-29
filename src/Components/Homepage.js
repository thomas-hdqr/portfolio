import React, { useState } from 'react'
import Navbar from './Navbar'
import {gsap, Sine} from 'gsap'


export default function Homepage() {


    // trying to get an animated background
    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);
    
    const blurs = gsap.utils.toArray(".blur");
    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
      });
    
      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });
    
    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1]
      });
    }
    
    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }



    // For the "contact me" hover effect
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
      setIsHovering(true);
    };
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    return (
        <section className="homepage">
                    <Navbar />
                    <div className="homepage-text">
                        <div className="homepage-title">
                            <h1 className="title">
                                <div>Hey i’m Thomas, </div>
                                <div>a web developer </div>
                                <div>based in Paris, France</div>
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
            </section>
    )
}
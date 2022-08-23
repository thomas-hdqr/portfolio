import React, {useState, useEffect, useRef} from 'react'
import Navbar from './Navbar'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Homepage() {


    // For the text reveal animation
    const textVariants = {
        visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
      };

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
                    <Navbar />
                    <div className="homepage-text">
                        <div className="homepage-title">
                            <h1 className="title">
                                <motion.div 
                                variant={textVariants}
                                initial="hidden"
                                animate={{scale: 2}}
                                >
                                <div>Hey i’m Thomas, </div>
                                </motion.div>
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
            </div>
    )
}
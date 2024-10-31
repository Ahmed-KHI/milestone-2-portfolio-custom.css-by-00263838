import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <a 
                href="#home" 
                className={`top ${isVisible ? 'visible' : ''}`} 
                onClick={handleScrollToTop} 
                aria-label="Scroll to top"
            >
                <Image 
                    src="/images/scroll-top-img.png" 
                    alt="Scroll to top" 
                    width={50} 
                    height={50} 
                />
            </a>
        )
    );
};

export default ScrollTopButton;

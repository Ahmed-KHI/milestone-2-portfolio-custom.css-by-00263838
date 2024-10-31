import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };

    return (
        <header className={isOpen ? 'toggle' : ''}>
            <div className="user">
                <Image 
                    src="/images/pic.jpg" 
                    alt="Muhammad Ahmed" 
                    width={200} 
                    height={200} 
                    className="profile-image" 
                />
                <h3 className="name">Muhammad Ahmed</h3>
                <p className="post">Front End Developer</p>
            </div>
            <nav className={`navbar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link href="#home" onClick={handleLinkClick}>Home</Link></li>
                    <li><Link href="#about" onClick={handleLinkClick}>About</Link></li>
                    <li><Link href="#portfolio" onClick={handleLinkClick}>Portfolio</Link></li>
                    <li><Link href="#contact" onClick={handleLinkClick}>Contact</Link></li>
                </ul>
            </nav>
            <div id="menu" onClick={toggleNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading">My <span>Portfolio</span></h1>
            <div className="box-container">
                <div className="box">
                    <Image 
                        src="/images/img1.png" 
                        alt="Project 1" 
                        width={300} // Set appropriate width
                        height={200} // Set appropriate height
                    />
                </div>
                <div className="box">
                    <Image 
                        src="/images/img2.png" 
                        alt="Project 2" 
                        width={300} 
                        height={200} 
                    />
                </div>
                <div className="box">
                    <Image 
                        src="/images/img3.png" 
                        alt="Project 3" 
                        width={300} 
                        height={200} 
                    />
                </div>
                <div className="box">
                    <Image 
                        src="/images/img4.png" 
                        alt="Project 4" 
                        width={300} 
                        height={200} 
                    />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

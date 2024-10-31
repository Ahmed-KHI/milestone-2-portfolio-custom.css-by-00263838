import React from 'react';

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <h1 className="heading"><span>About</span> Me</h1>
            <div className="row">
                <div className="info">
                    <h3><span>Name:</span> Muhammad Ahmed</h3>
                    <h3><span>Age:</span> 28</h3>
                    <h3><span>Qualification:</span> MBA</h3>
                    <h3><span>Post:</span> Front End Developer</h3>
                    <h3><span>Language:</span> English, Urdu</h3>
                    <a href="#"><button className="btn">Download CV</button></a>
                </div>
                <div className="counter">
                    <div className="box"><span>2+</span><h3>Years of Experience</h3></div>
                    <div className="box"><span>100+</span><h3>Projects Completed</h3></div>
                    <div className="box"><span>430+</span><h3>Happy Clients</h3></div>
                    <div className="box"><span>12+</span><h3>Awards Won</h3></div>
                </div>
            </div>
        </section>
    );
};

export default About;

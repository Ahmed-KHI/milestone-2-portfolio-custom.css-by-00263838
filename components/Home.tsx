import React from 'react';

const Home: React.FC = () => {
    return (
        <section className="home" id="home">
            <h3>Hi There!</h3>
            <h1>I AM <span>Muhammad Ahmed</span></h1>
            <p>I’m a Front-End Developer dedicated to crafting engaging, user-friendly web experiences...</p>
            <a href="#about"><button className="btn">About Me</button></a>
        </section>
    );
};

export default Home;

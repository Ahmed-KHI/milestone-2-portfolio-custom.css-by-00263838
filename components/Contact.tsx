import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><span>Contact</span> Me</h1>
            <div className="row">
                <div className="content">
                    <h3 className="title">Contact Info</h3>
                    <div className="info">
                        <h3><i className="fas fa-envelope"></i> m.muhammad.ahmed115@gmail.com</h3>
                        <h3><i className="fas fa-phone"></i> +123-456-7890</h3>
                        <h3><i className="fas fa-map-marker-alt"></i> Karachi, Pakistan - 75200</h3>
                    </div>
                </div>
                <form>
    <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Name" 
        className="box" 
        autoComplete="name" 
    />
    <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Email" 
        className="box" 
        autoComplete="email" 
    />
    <input 
        type="text" 
        id="project" 
        name="project" 
        placeholder="Project" 
        className="box" 
        autoComplete="off" 
    />
    <textarea 
        id="message" 
        name="message" 
        cols={30} 
        rows={10} 
        className="box message" 
        placeholder="Message" 
        autoComplete="off" 
    />
    <button type="submit" className="btn">Send</button>
</form>

            </div>
        </section>
    );
};

export default Contact;

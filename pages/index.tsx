
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import ScrollTopButton from '../components/ScrollTopButton';


const HomePage: React.FC = () => {
    return (
        <>
            
            <Header />
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <ScrollTopButton />
        </>
    );
};

export default HomePage;

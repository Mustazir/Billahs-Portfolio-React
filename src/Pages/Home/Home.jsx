import About from "./About";
import ContactUs from "./ContactUs";
import Hero from "./Hero";
import PortfolioSection from "./PortfolioSection";
import Projects from "./Projects";
import Services from "./Services";
import NavBarr from "./Shared/NavBarr";
import Skills from "./Skills";


const Home = () => {
    return (
        <div className="flex gap-16 flex-col">
            <NavBarr></NavBarr>
            <Hero></Hero>
            <Services></Services>
            <About></About>
            <PortfolioSection></PortfolioSection>
            <Skills></Skills>
            <Projects></Projects>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;
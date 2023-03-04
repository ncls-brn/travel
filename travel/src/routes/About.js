import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import AboutPicture from "../assets/2.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg={AboutPicture}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>

    )
}

export default About;
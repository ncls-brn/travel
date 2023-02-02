import Navbar from "../components/Navbar";
import Hero  from "../components/Hero";
import AboutPicture from "../assets/2.jpg";

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
        </>

    )
}

export default About;
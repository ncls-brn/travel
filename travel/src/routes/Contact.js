import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactPicture from "../assets/9.jpg";
import Footer from "../components/Footer";

function Contact(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg={ContactPicture}
        title="Contact Information"
        btnClass="hide"
        />
        <Footer/>
        </>

    )
}

export default Contact;
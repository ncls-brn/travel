import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicePicture from "../assets/7.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        <>
        <Navbar /> 
        <Hero 
        cName="hero-mid"
        heroImg={ServicePicture}
        title="Service"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>

    )
}

export default Service;
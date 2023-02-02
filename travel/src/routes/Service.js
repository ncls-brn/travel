import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicePicture from "../assets/7.jpg";

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
        </>

    )
}

export default Service;
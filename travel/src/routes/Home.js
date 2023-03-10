import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomePicture from "../assets/1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
    return(
        <>
        <Navbar /> 
        <Hero 
       cName="hero"
       heroImg={HomePicture}
       title="Make Your Own Dream"
       text="Choose Your Destination"
       buttonText="Travel"
       url="/"
       btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>

    )
}

export default Home;

import DestinationData from "./DestinationData";
import "./DestinationStyles.css"
import Mountain1 from "../assets/10.jpg";
import Mountain2 from "../assets/11.jpg";
import Mountain3 from "../assets/12.jpg";
import Mountain4 from "../assets/13.jpg";


const Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>After seeing the most beautiful landscapes in the world, you will never want to go home again</p>

            <DestinationData
            className="first-des"

            heading="Jungfraujoch, Switzerland"
            text="Nearby, the Jungraujoch is a pass connecting the Mönche and the Jungfrau, in the heart of the Bernese Alps between the cantons of Bern and the Valais: it rises to 3471 meters above sea level and can be reached by means of an amazing railway, and even a delicious restaurant with breathtaking views of the surrounding mountains."
            img1={Mountain1}
            img2={Mountain2}
            
            />

            <DestinationData
            className="first-des-reverse"
            
            heading="The Grand Canyon, United States"
            text="Located in northern Arizona, Grand Canyon National Park is one of the country’s most famous national parks. This is the image par excellence of the American West. Founded in 1919, the park contains 4931 km2 of protected space and geological wonders sculpted by the Colorado River for several millennia. It houses the Grand Canyon massif with its superb layers of red rocks, bearing witness to a long history of geological development.
            The best way to see the canyon is on the Rim trail, which gives you access to many exceptional views."
            img1={Mountain3}
            img2={Mountain4}
            
            />
            
        </div>
    )
}

export default Destination;

import DestinationData from "./DestinationData";
import "./DestinationStyles.css"


const Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>After seeing the most beautiful landscapes in the world, you will never want to go home again</p>

            <DestinationData
            heading="Jungfraujoch, Switzerland"
            text="Nearby, the Jungraujoch is a pass connecting the Mönche and the Jungfrau, in the heart of the Bernese Alps between the cantons of Bern and the Valais: it rises to 3471 meters above sea level and can be reached by means of an amazing railway, and even a delicious restaurant with breathtaking views of the surrounding mountains."
            
            />
            
        </div>
    )
}

export default Destination;
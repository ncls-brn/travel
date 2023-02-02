
import DestinationData from "./DestinationData";
import "./DestinationStyles.css"


const Destination = ()=>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>After seeing the most beautiful landscapes in the world, you will never want to go home again</p>

            <DestinationData/>
            
        </div>
    )
}

export default Destination;
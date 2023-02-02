import Mountain1 from "../assets/10.jpg";
import Mountain2 from "../assets/11.jpg";
import { Component } from "react";
import "./DestinationStyles.css";


class DestinationData extends Component{
    render() {
        return(
            <div className="frist-des">
                <div className="des-text">
                    <h2>Jungfraujoch, Suisse</h2>
                    <p>Nearby, the Jungraujoch is a pass connecting the Mönche and the Jungfrau, in the heart of the Bernese Alps between the cantons of Bern and the Valais: it rises to 3471 meters above sea level and can be reached by means of an amazing railway, and even a delicious restaurant with breathtaking views of the surrounding mountains.</p>
                </div>
                <div className="image">
                    <img alt="img" src={Mountain1}/>
                    <img alt="img" src={Mountain2}/> 
                </div>
            </div>
        )
    }
}

export default DestinationData;
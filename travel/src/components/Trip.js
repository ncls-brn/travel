 import "./TripStyles.css"; 
 import TripData from "./TripData";
 import trip1 from "../assets/14.jpg";
 import trip2 from "../assets/15.jpg";
 import trip3 from "../assets/16.jpg";

 function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google maps! </p>
            <div className="tripcard">
                
                <TripData
                image={trip2}
                heading="Trip in Japan"
                text="Hypermodern and attached to its tradition, urbanized in its megalopolis and wild in its countryside, Japan is the archipelago of all contrasts. From the peaks of Mount Fuji to the fishermen's islands of the Inland Sea, passing through the inimitable Tokyo and the imperial Kyoto, the Land of the Rising Sun offers an infinite variety of landscapes and cultural richness"
                />
                <TripData
                image={trip1}
                heading="Trip in Maldives"
                text="Here are the most unforgettable experiences you can have in the Maldives. The Maldives is a popular vacation spot for wealthy tourists and some couples spend a fortune on this trip. Thus, the tourist structures on the spot compete of ingenuity to offer fairy-like moments and out of price to those which seek always more magic, beauty and feelings. In the Maldives you can realize your wildest dreams because it is a territory that always devotes more efforts to attract travelers in search of luxury, calm and voluptuousness."
                />
                <TripData
                image={trip3}
                heading="Trip in Sweden"
                text="Almost as big as France but 7 times less populated, Sweden does not lack vital space, and the individual right has been able to develop there without a hitch, with its counterpart: the respect of the other. Sweden is the harmony between man and nature, landscapes of absolute tranquility and a gentle way of life that flirts with monotony.
                To brighten up all this, some big dynamic cities, most often full of charm, full of history but at the top of modernity, for better or for worse."
                />
            </div>
        </div>
    )
 }


 export default Trip;
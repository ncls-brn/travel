import Mountain1 from "../assets/10.jpg";
import Mountain2 from "../assets/11.jpg";
import { Component } from "react";
import "./DestinationStyles.css";


class DestinationData extends Component{
    render() {
        return(
            <div className="frist-des">
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
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
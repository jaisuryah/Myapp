import { Component } from "react";
import "./state.css";

class StateClassCom extends Component
{
    state={
        color:'yellow',
        price:123
    }

    HandleChange=()=>
    {
        this.setState({color:'Red'});
    }
    
    render()
    {
        return(
            <div>
                <h1>Color i selected is {this.state.color} and price is {this.state.price}</h1>
                <button onClick={this.HandleChange} className="btn-3">Click me</button>
            </div>
        )
    }
}

export default StateClassCom;
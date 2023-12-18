import { Component } from "react";

class PropsClass extends Component
{
    render()
    {
        return(
            <div>
                    <h1>Hi i am {this.props.college}</h1>
                </div>
        )
    }
}

export default PropsClass;
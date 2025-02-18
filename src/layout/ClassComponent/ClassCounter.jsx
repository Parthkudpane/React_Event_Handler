
import {Component} from "react";
class ClassCounter extends Component {
    constructor() {
        super ()
        this.state = {
            count:0,
            name:""
        }
    }

    inc =() => {
        this.setState (
            {
                count:this.state.count + 1,
                name :"increment"
            }
        )
    }

    dec = () =>{
        var Counter =  this.state.count;
        this.setState(
            {
                count: Counter > 0 ? Counter - 1 : Counter,
                name:"decrement"
            }
        )
    }
    render() {
        return (
            <>
                <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                    <h1>{this.state.count}</h1>
                    <h3>{this.state.name}</h3>
                    <button onClick={this.inc} className="btn btn-outline-success">+</button>
                    <button onClick={this.dec} className="btn btn-outline-danger mx-3">-</button>
                </div>








                {/* <p>{this.state.count}</p>
                <p>{this.state.name}</p> */}
            </>
        )

    }
}
export default ClassCounter
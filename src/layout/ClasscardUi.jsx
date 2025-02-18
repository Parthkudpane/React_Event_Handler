import { Component } from "react"

class ClassCardUI extends Component {
    render() {
        return (
            <div className="card shadow border-0 mt-4">
                <img src={this.props.image ?? ""} alt="" />
                <div className="card-body">
                    <h3 style={{ height: '50px' }}>{this.props.name ?? ""}</h3>
                    <p className="pt-3" style={{ height: '150px' }}>{this.props.discription ?? ""}</p>
                </div>
            </div>
        )
    }
}
export default ClassCardUI
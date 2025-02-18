import { Component } from "react";
import ClassCardUI from "../ClasscardUi";
import cardData from "../cardData";

class ClassProps extends Component {
    render() {
        return (
            <div className="container my-4">
                <div className="row mx-0">
                    {
                        cardData.map((ele, index) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6 mt-4">
                                    <ClassCardUI name={ele.name} discription={ele.discription} image={ele.cardImage} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ClassProps
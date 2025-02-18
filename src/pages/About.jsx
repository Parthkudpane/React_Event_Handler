import cardData from "../layout/cardData"
import CardUI from "../layout/CardUI"

const About = () => {
    return (
        <>
            <div className="container">
                {/* <h1>About Us</h1> */}
                <div className="row">

                    {
                        cardData.map((ele, index) => {
                            return (
                                <div className="col-lx-3 col-lg-4 col-md-6 mt-5">
                                    <CardUI name={ele.name} discription={ele.discription} image={ele.cardImage} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default About
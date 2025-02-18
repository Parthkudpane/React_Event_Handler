const OnClick = () => {
    function add() {
        alert("HELLO")
    }

    const calc = (number) => {
        alert(number)

    }


    return (
        <>
            <div className="col-lg-6 mx-auto my-4 p-5 shadow">
                <h1>Click Event</h1>


            {/* simple function without argument*/}
                <button onClick={add} className="btn btn-outline-success">Click Here</button>

            {/* multifunction with argument or parameter*/}
                <button onClick={()=> calc(1)} className="btn btn-outline-success mx-2">1</button>
                <button onClick={()=> calc(2)} className="btn btn-outline-success mx-2">2</button>
                <button onClick={()=> calc(3)} className="btn btn-outline-success mx-2">3</button>
                <button onClick={()=> calc(4)} className="btn btn-outline-success mx-2">4</button>
            </div>
        </>
    )
}
export default OnClick
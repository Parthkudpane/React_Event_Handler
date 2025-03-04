import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
    function inc () {
            setCount(count+1)
    }

    function dec () {
        // 1st Method 
            // setCount(count-1)

        // 2st Method 
            // if(count>0) {
            //     setCount(count-1)
            // }
          
        // 3rd Method  
          return  count > 0 ? setCount(count-1):count
    }
    return(
        <div>
                <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                    <h1>{count}</h1>
                    <button onClick={inc} className="btn btn-outline-success">+</button>
                    <button onClick={dec}className="btn btn-outline-danger mx-3">-</button>

                </div>
        </div>
    )
}
export default Counter
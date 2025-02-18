// rafce for below shortcutkey = fullform (rafce)):- reactArrowFunctionExportComponent  

import { useState } from "react";

const Form = () => {
    const [username,SetUsername] = useState("")
    const [mobile,setMobile] = useState("")
    
    // console.log(username)
    // console.log(mobile)
    
    function submitData(e) {
        e.preventDefault()  
        const user = {username,mobile};
        console.log (user)
        alert("form summited")

    }
    return (
        <>
            <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post" onSubmit={submitData}>
                <div className="mt-4">
                    <input type="text"  onChange={(e)=> SetUsername(e.target.value)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-4">
                    <input type="text"  onChange={(e)=> setMobile(e.target.value)} className="form-control" placeholder="enter mobile number" />
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </>

    )
}

const username = "my name";
const mobile = "8980121214";
const obj = {
    username :username,
    mobile: mobile
}
console.log(obj)

// when variable and key name same the can we pass as  
const obj2 ={username,mobile}
console.log(obj2)

export default Form
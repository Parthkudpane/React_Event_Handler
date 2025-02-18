// rafce for below shortcutkey = fullform (rafce)):- reactArrowFunctionExportComponent  

import { useState } from "react";

const SingleFunctionForm = () => {
    const [user, setUser] = useState({})
    function getInput(e) {

        const name = e.target.name;
        const value = e.target.value;
       


        //when you want variable's value pass as a key in object then assign {[variable_name]:value }   
        const newUser = {
            [name]: value
        }

        const finalData = Object.assign(user, newUser)
        console.log(finalData)

        // setUser({...user,...newUser})
        setUser(finalData)
    }
    function getInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const checked = e.target.checked; // For checkboxes
    
        if (e.target.type === "checkbox") {
            setUser((prevUser) => {
                if (checked) {
                    return { ...prevUser, hobbies: [...(prevUser.hobbies || []), value] };
                } else {
                    return { ...prevUser, hobbies: prevUser.hobbies.filter((hobby) => hobby !== value) };
                }
            });
        } else {
            setUser((prevUser) => ({ ...prevUser, [name]: value }));
        }
    }

    function Submit(e) {
        e.preventDefault()
        console.log(user)
        alert("form submitted")
        // window.location.reload()
    }
    return (
        <>
            <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post" onSubmit={Submit}>
                <div className="mt-4">
                    <input type="text" name="username" onChange={(e) => getInput(e)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-4">
                    <input type="numbe" name="mobile" onChange={(e) => getInput(e)} className="form-control" placeholder="enter mobile number" />
                </div>
                <div className="mt-4">
                    <input type="emil" name="email" onChange={(e) => getInput(e)} className="form-control" placeholder="enter email id" />
                </div>
                <div className="mt-4">
                    <input type="password" name="mobile" onChange={(e) => getInput(e)} className="form-control" placeholder="enter password" />
                </div>
                <div className="mt-4">
                    <input type="date" name="dob" onChange={(e) => getInput(e)} className="form-control" />
                </div>
                <div className="mt-4">
                    <label className="d-block">Gender :</label>
                    <input type="radio" name="gender" onChange={(e) => getInput(e)} value="Male" />Male
                    <input type="radio" className="ms-3" name="gender" onChange={(e) => getInput(e)} value="Female" />Female
                    <input type="radio" className="ms-3" name="gender" onChange={(e) => getInput(e)} value="Other" />Other
                </div>
                <div className="mt-4">
                    <label className="d-block">Select Country :</label>
                    <select name="country" className="form-control mt-2" onChange={(e) => getInput(e)}>
                        <option value="">-----Select Country-----</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="London">London</option>
                    </select>
                </div>
                <div className="mt-4">
                    <label className="d-block">Hobbies :</label>
                    <input type="checkbox" name="" onChange={(e) => getInput(e)} value="Cricket" />Cricket
                    <input type="checkbox" className="ms-3" name="Hobbies" onChange={(e) => getInput(e)} value="Wallyball" />Wallyball
                    <input type="checkbox" className="ms-3" name="Hobbies" onChange={(e) => getInput(e)} value="Football" />Football
                </div>
             
                <div className="mt-5">
                    <button className="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </>

    )
}

export default SingleFunctionForm
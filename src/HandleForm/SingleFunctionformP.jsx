var SingleFunctionformP = () => {
    var user = {};

    function getInput(e) {
        var name = e.target.value;
        var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        user[name] = value;
        console.log(user)
    }

    function submitData(e) {
        e.preventDefault();
        console.log("final user data:", user);
        alert("form submitted")
    }

    return (
        <>
            <form className="col-lg-6 mx-auto my-4 p-4 shadow" method="post" onSubmit={submitData}>
                <div className="mt-4">
                                       <h1 className="text-center my-4">SignUp Form</h1>

                    <input type="text" name="username" onChange={getInput} className="form-control" placeholder="Enter User Name" />
                </div>
                <div className="mt-4">
                    <input type="number" name="mobile" onChange={getInput} className="form-control" placeholder="Enter Mobile Number" />
                </div>
                <div className="mt-4">
                    <input type="email" name="email" onChange={getInput} className="form-control" placeholder="Enter Email Id" />
                </div>
                <div className="mt-4">
                    <input type="password" name="password" onChange={getInput} className="form-control" placeholder="Enter Password" />
                </div>
                <div className="mt-4">
                    <input type="date" name="dob" onChange={getInput} className="form-control" />
                </div>
                <div className="mt-4">
                    <label className="d-block">Gender :</label>
                    <input type="radio" name="gender" onChange={getInput} value="Male" />Male
                    <input type="radio" className="ms-3" name="gender" onChange={getInput} value="Female" />Female
                    <input type="radio" className="ms-3" name="gender" onChange={getInput} value="Other" />Other
                </div>
                <div className="mt-4">
                    <label className="d-block">Select Country :</label>
                    <select name="country" className="form-control mt-2" onChange={getInput}>
                        <option value="">-----Select Country-----</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="London">London</option>
                    </select>
                </div>
                <div className="mt-5">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )
}
export default SingleFunctionformP
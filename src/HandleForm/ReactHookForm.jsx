import { useForm } from "react-hook-form"

const ReactHookForm = () => {
    const {register,handleSubmit} = useForm()

    function signup(data) {
        console.log(data)
    }
  return (
    <>
    <div className="col-lg-6 mx-auto my-5 p-5 shadow">
        <form action="" method="post" onSubmit={handleSubmit(signup)}>
            <div className="mt-4">
                <input type="text"{...register('userName')} className="form-control" placeholder="enter user name" />
            </div>
            <div className="mt-4">
                <input type="Number"{...register('mobile')} className="form-control" placeholder="enter user mobile" />
            </div>
            <div className="mt-4">
                <select {...register('course')} className="form-select">
                <option value="">--select course--</option>
                <option value="web">web</option>
                <option value="app">app</option>
                </select>
            </div>
            <div className="mt-4">
                <input type="radio" {...register('gender')} value="Male"/>Male
                <input type="radio" {...register('gender')} value="Female"/>Female
                <input type="radio" {...register('gender')} value="Other"/>Other
            </div>
            <div className="mt-4">
                <button className="btn btn-success">Submit</button>
            </div>
        </form>
        </div>    
    </>
  )
}

export default ReactHookForm
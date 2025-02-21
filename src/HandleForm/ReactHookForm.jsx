import { useForm } from "react-hook-form"

const ReactHookForm = () => {
    const {register,handleSubmit, formState:{errors}} = useForm()

    function signup(data) {
        console.log(data)
    }
  return (
    <>
    <div className="col-lg-6 mx-auto my-5 p-5 shadow">
        <form action="" method="post" onSubmit={handleSubmit(signup)}>
            <div className="mt-4">
                <input type="text" className="form-control" placeholder="enter user name" 
                {...register('userName',
                     {
                        required: {
                            value:true,
                            message:"Enter Username"
                        },
                        minLength:{
                            value:3, 
                            message:"minimum 3 character"
                        },
                        maxLength:{
                            value:20,
                            message: "maximum 20 character"
                        },
                        pattern:{
                            value:/[A-Za-z]/,
                            message:"Only character"
                        }
                     }
            )}
                />
                <p>{errors && errors?.userName?.message}</p>

            </div>
            <div className="mt-4">
                <input type="Number"{...register('mobile')} className="form-control" placeholder="enter user mobile" />
            </div>
            <div className="mt-4">
                <select {...register('course',
                        {
                            required:{
                                value:true,
                                message:"select any course"
                            }
                        }

                )} className="form-select">
                <option value="">--select course--</option>
                <option value="web">web</option>
                <option value="app">app</option>
                </select>
                <p className="text-danger">{errors?.couese?.message}</p>

            </div>
            <div className="mt-4">
                <input type="radio" {...register('gender')} value="Male"/>Male
                <input type="radio" {...register('gender')} value="Female" className="ms-2"/>Female
                <input type="radio" {...register('gender')} value="Other" className="ms-2"/>Other
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
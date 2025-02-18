import { useEffect, useState } from "react"
import CardUI from "../layout/CardUI";


const RenderApi = () => {
    const [users , setUser] = useState()

    async function ShowApi () {
        const res = await fetch ('https://jsonplaceholder.typicode.com/users');
        const reault = await res.json()
        setUser(reault)
    } 
    
    useEffect(() => {
        document.title = "useEffect Hook"
        ShowApi() 
    },[])              // [] => dependacy

    return (
        <>
        {!users && <h1 className="my-4 text-center">Loading....................</h1>}
            <div className="container">
                <div className="row">
                        {
                            users && users.map((users, index) => {
                                    return (
                                        <div className="col-lg-4 mt-5" key={index}>
                                            <CardUI name={users.name} discription={users.username}/>
                                        </div>
                                    )
                            } )
                        }

                </div>
            </div>
        </>
    )
}
export default RenderApi
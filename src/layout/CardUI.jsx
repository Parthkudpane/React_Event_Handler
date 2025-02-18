
const CardUI = (props) => {
    console.log(props)
    return (
        <>
         <div className="card shadow border-0">
            <img src={props.image ??"Images/Glass Avtar.jpg"} alt=""/>
            <div className="card-body">
                <h1>{props.name}</h1>
                <p>{props.discription}</p>
            </div>
        </div>
        </>
    )
}

// ---- DESTRUCTURING -----//
// const CardUI = ({title,paragraph,image}) => {
//     return (
//         <>
//          <div className="card shadow border-0">
//             <img src={image?? "Images/Glass Avtar.jpg"} alt="" />
//             <div className="card-body">
//                 <h1>{title}</h1>
//                 <p>{paragraph}</p>
//             </div>
//         </div>
//         </>
//     )
// }
export default CardUI
















































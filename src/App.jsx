import ClassProps from "./layout/ClassComponent/Classprops"
import About from "./pages/About"
import Home from "./pages/Home"
import Counter from "./hook/Counter"
import ClassCounter from "./layout/ClassComponent/ClassCounter"
import RenderApi from "./hook/RenderApi"
import OnClick from "./Events/OnClick"
import Form from "./HandleForm/Form"
import SingleFunctionForm from "./HandleForm/SingleFunctionForm"
import ReactHookForm from "./HandleForm/ReactHookForm"
import SingleFunctionformP from "./HandleForm/SingleFunctionformP"
 
const App = () => {
  return (
      <>
          {/* <Home />

           <h1 className="text-center">function Component</h1> 
          <About />  */}

          {/* <h1 className="text-center my-5">class component</h1>
          <ClassProps /> */}
          
          {/* <h1 className="text-center my-5">Function Component</h1>
          <Counter />  */}

           {/* <h1 className="text-center my-5">Class Component</h1>
          <ClassCounter/>   */}

          {/* < RenderApi /> */}

          {/* <OnClick/> */}

          {/* <Form /> */}

          <SingleFunctionForm />

          {/* <SingleFunctionformP /> */}
          {/* <ReactHookForm /> */}
      </>
  )
}
export default App  
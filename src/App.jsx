import { useState } from "react"
import './App.css'




function  App() {

  const [num , setNum] = useState(0);

  const add = () => {
  setNum(num + 1)

  }

  const less =() => {
  if(num === 0){
    return 
  }

  setNum(num - 1)

  }

  return (
    <>
    <div className="counter">
    <h1>Counter</h1>
    <h2>{num}</h2>
    <button onClick={add} className="addbtn">+</button>
    <button onClick={less} className="lessbtn">-</button>

    </div>
    
    
    </>
  )


}



export default App
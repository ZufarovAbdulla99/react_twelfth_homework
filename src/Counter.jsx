import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    
    function plus() {
        setCount(count + 1)
    }

    function minus(){
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
      <div style={{backgroundColor: "#00ffff", width: "400px", height: "200px", textAlign: "center", padding: "5px", color: "black", borderRadius: "10px", margin: "10px auto"}}>
        <h2>Simple Counter</h2>
        <h3>{count}</h3>
        <button onClick={minus}>-</button>   
        <button onClick={reset}>reset</button>   
        <button onClick={plus}>+</button>   
      </div>
    )
  }
  
  export default Counter
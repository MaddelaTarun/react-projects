import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>
        Counter App.
      </h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(prev=>prev+1)}>Increase</button>
      <button disabled={count===0} onClick={() => setCount(prev=>(prev > 0?prev-1:0))}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App

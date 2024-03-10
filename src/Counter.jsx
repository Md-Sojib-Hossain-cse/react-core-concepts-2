import { useState } from "react"
export default function Counter () {
    const [counter , setCounter] = useState(0);
    function handleAdd(){
        const newCount = counter + 1;
        setCounter(newCount);
    }
    function handleReduce() {
        const newCount = counter -1;
        setCounter(newCount);
    }
    return (
        <div style={{border : '2px solid purple'}}>
            <h3>Counter : {counter}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
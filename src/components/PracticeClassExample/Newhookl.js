import React,{useState} from 'react'
function Newhookl(){
    const[count, setCount]=useState(0)
    return(
        <div>
            <button onClick={() => setCount(count+1)}>Calculate{count}</button>
            <button onClick={() => setCount(count-1)}>Calculate{count}</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
export default Newhookl
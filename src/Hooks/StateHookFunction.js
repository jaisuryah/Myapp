import {useState} from "react";

export default function StateHookFuntion()
{


    const[count,setCount]=useState(0);
    const changeCoun=()=>setCount(count+1);
    const DecreCount=()=>setCount(count-1);

    return (
        <div>
                <h1>Count : {count}</h1>
                <button onClick={changeCoun}>Increment</button>
                <button onClick={DecreCount}>Decrement</button>
        </div>
    )
}
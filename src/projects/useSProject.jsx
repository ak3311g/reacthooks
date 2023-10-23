import { useState } from "react"

export default function UStateProject(){
    
    const [count, setCount] = useState(0);
    
    return(
        <>
            <div className="text-center mt-10 flex flex-col justify-center items-center">
                <p>Counter</p>
                <p>You clicked {count} times</p>
                <button className="bg-green-500 px-1 w-max rounded-md m-1" onClick={() => setCount(count + 1)}>
                    Click me
                </button>
                <button className="bg-red-500 px-1 w-max rounded-md m-1" onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>
        </>
    )
}
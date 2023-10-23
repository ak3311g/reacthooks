import { useState,useRef } from "react"

export default function URefProject(){

    const [value,setValue] = useState(0);

    const newval = useRef(0);
    

    return(
        <>
            <div className="">
                <div className="flex flex-col justify-center items-center">
                    <input type="text" className="text-center w-20 px-1 rounded-md" onChange={(e)=>{newval.current = newval.current + e.target.value;console.log(newval.current)}}/>
                    <br />
                    clicked {newval.current} times
                    rendered {value} times
                    <button onClick={()=>{setValue(value+1)}}>Click me</button>
                </div>
            </div>
        </>
    )
}
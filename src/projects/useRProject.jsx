import { useState,useRef } from "react"

export default function URefProject(){

    const [value,setValue] = useState(0);

    const newval = useRef(0);
    console.log(newval.current);

    return(
        <>
            <div className="">
                <div className="">
                    <p>{value}</p>
                    <input type="text" onChange={(e)=>{console.log(e)}}/>
                    <br />
                    {/* clicked {newval.current} times */}
                    rendered {value} times
                </div>
            </div>
        </>
    )
}
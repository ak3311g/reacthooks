import { useCallback, useState } from "react";

export default function UCallbackProject(){

    const [number, setNumber] = useState(0);
    const [root, setRoot] = useState(0);

    const calculateRoot = useCallback(() => {
        return Math.sqrt(number);
    }, [number]);

    return (
        <>
            <div className="">
                <input type="number" className="border-2 border-gray-500 rounded-md p-2 m-4 text-left" placeholder="Enter a number" onChange={(e)=>{setNumber(e.target.value)}}/>
                <button className="border-2 border-gray-500 rounded-md p-2 m-4 text-left" onClick={()=>{setRoot(calculateRoot())}}>Calculate Root</button>
                <p className="text-left m-4">The square root of the number is: {root}</p>
            </div>
        </>
    )
}
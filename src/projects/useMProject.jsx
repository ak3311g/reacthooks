import { useMemo, useState } from "react";

export default function UMemoProject(){
    
    const [a, setA] = useState(0);

    const checkeven = useMemo(() => {
        return evennum(a)
    }, [a]);

    function evennum(a){
        for(let i=0; i<=20000; i++){
            console.log(i);
        }
        return a*2 ;
    }
    
    return(
        <>
            <div className="">
                <input type="number" className="border-2 border-gray-500 rounded-md p-2 m-4 text-left" value={a} onChange={(e)=>setA(e.target.value)}/>
                <p className="text-left m-4">The number is {a}.</p>
                <p className="text-left m-4">The number is {checkeven}.</p>
            </div>
        </>
    )
}
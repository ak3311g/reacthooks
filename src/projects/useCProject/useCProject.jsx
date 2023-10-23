import { useContext } from "react";
import storeContext from "./storecontext";

export default function UContextProject() {
        
        const {store,updatename} = useContext(storeContext);
        console.log(store?.title);

        return (
            <>
            <div className="text-center mt-10">
                <p className="text-xl md:text-3xl underline my-3 ms-2 font-bold">useContext</p>
                <p className="text-xl md:text-3xl my-3 ms-2 font-bold">{store?.title}</p>
                <p className="text-xl md:text-3xl my-3 ms-2 font-bold">{store?.name}</p>
                <input type="text" onChange={updatename} />
            </div>
            </>
        )
    }
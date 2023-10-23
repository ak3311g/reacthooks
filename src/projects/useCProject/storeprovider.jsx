import { useState } from "react";
import storeContext from "./storecontext";
import UContextProject from "./useCProject";

export default function StoreProvider() {

    const [store,setStore] = useState({
        name: "useContext",
        title: "abc",
        description: "Accepts a context object and returns the current context value for that context.",
    })

    function updatename(e) {
        setStore({
            ...store,
            name: e.target.value
        })
    }

    return (
        <storeContext.Provider value={{store,updatename}}>
            <UContextProject />
        </storeContext.Provider>
    )
}
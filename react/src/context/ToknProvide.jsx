import React, { createContext, useState } from "react";

const TokenContext = createContext()



function TokenProvide({ children }) {

    const [token, setToken] = useState();
    const [theme,setTheme] = useState(false);
    

    return (
        <TokenContext value={{ token, setToken,theme,setTheme }}>
            <div style={{backgroundColor:theme ? "black": "white",color:theme ? "white" : "black"}}>

            {children}
            </div>
        </TokenContext>
    )
}

export { TokenContext, TokenProvide }
import React, { createContext, useState } from "react";

const TokenContext = createContext()

function TokenProvide({ children }) {

    const [token, setToken] = useState()

    return (
        <TokenContext value={{ token, setToken }}>
            {children}
        </TokenContext>
    )
}

export { TokenContext, TokenProvide }
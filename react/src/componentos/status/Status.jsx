import React, { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../../context/ToknProvide';

export default function Status() {
    const { token, theme, setTheme } = useContext(TokenContext);
    const [status, setStatus] = useState({});



    useEffect(() => {
        const getStatus = async () => {
            console.log("get status called");

            const res = await fetch("http://localhost:3000/status", {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": token
                }
            });
            console.log(res);

            const data = await res.json();

            console.log(data);

            setStatus(data)


        }
        getStatus();
        
    }, [theme,token])


    return (
        <div>
            <p>status: </p>
            <button onClick={() => setTheme(!theme)}>{!theme ? "darck" : "light"}</button>
            <p>{JSON.stringify(status)}</p>
        </div>
    )
}

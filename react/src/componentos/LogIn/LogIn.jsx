import { TokenContext } from "../../context/ToknProvide"
import "./LogIn.css"
import React, { useContext, useState } from 'react'

export default function LogIn() {

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const {setToken} = useContext(TokenContext)

  const habelSubmit = async (e) => {
    e.preventDefault();

    setUser(e.target[0].value)
    setPassword(e.target[1].value)

    
    const res =  await fetch("http://localhost:3000/logIn",{
      method:"POST",
      body:JSON.stringify({name:user,password:password}),
      headers:  {"Content-Type": "application/json",
        },

    })
  
    const data = await res.json();
    console.log(data);

    setToken(data.token)
    
    
  }
  return (
    <div>
      <form  onSubmit={habelSubmit}>

        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Password" />

        <button type="submit"  >Log in</button>
      </form>
    </div>
  )
}

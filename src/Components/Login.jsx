import React, { useContext, useState } from 'react'
import UserContext from '../Context/userContext'

function Login() {
    const {setUser} = useContext(UserContext)
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({name,password})
    }
    return (
    <div>
        <h1>Login form  </h1>
        <h5>Name</h5>
        <input placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <h5>Password</h5>
        <input placeholder='password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
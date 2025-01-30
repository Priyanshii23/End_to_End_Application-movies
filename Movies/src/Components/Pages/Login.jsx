import React, { useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/AuthContextProvider';

const Login = () => {
    const [username, setUsername]=useState("")
    const [password, setPassword] = useState("")
    const [error, setError]= useState(null)
    const {login} = useContext(AuthContext)
    const handleLogin= async (e)=>{
        e.preventDefault()
        try {
          
          const response = await axios.post("https://frill-shard-licorice.glitch.me/login", {
            username,
            password
        });          
          if(response.data.success){
            console.log(response.data.token)
            const {token} = response.data
            login (token)
          }
         
        } catch(err){
        setError(err)
        }
    }
  return (
  <>
   
    <form onSubmit={handleLogin}>
        <input type="text" placeholder='Enter username'value={username} onChange={(e)=>setUsername(e.target.value)} />
        <input type="password" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input type='submit' value="Login"/>
    </form>
  </>
  )
}

export default Login

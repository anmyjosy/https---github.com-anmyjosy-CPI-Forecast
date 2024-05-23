import React from 'react'
import './Register.css'
import { useState } from 'react'
import axios from 'axios'

function Register(){
  const[name, setName]=useState()
  const[email, setEmail]=useState()
  const[password, setPassword]=useState()
  const[role, setRole]=useState()
  const[purpose, setPurpose]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password,role,purpose})
    .then(result => {
      console.log(result)
      alert('Registered successfully!')
    })
    .catch(err=>console.log(err))
    
  }
  return (
    <div className='bg'>
      <div className='logborder'>
      <h1>Sign Up</h1>
      <div className='emailenter'>
      <input type='text' placeholder='Email' name='email' onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Name' name='name' onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)} required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Role' name='role'onChange={(e)=>setRole(e.target.value)} required/>
      </div>
      <div className='emailenter'>
      <input type='text' placeholder='Purpose' name='purpose' onChange={(e)=>setPurpose(e.target.value)} required/>
      </div>
      <div>
        <button onClick={handleSubmit} type='submit'>Create</button>
      </div>
    </div>
      </div>
  )
}

export default Register

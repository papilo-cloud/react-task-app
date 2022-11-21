import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        handleLogin(fName, lName)
    }
  return (
    <div className='login-form' >
        <form onSubmit={handleSubmit }>
            <label>
            <input type="text" 
                placeholder='First name'
                value={fName}
                onChange={e => setFName(e.target.value)}/>
            <br />
            <input type="text" 
                placeholder='Last name'
                value={lName}
                onChange={e => setLName(e.target.value)}/>
            </label>
            <button type='submit' 
            style={{backgroundColor: fName && lName? '':'#999' }}
            disabled={fName.length == 0 || lName.length == 0 } >
                login
            </button>
        </form>
    </div>
  )
}

export default Login

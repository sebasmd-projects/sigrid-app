import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/', { replace: true })
  }


  return (
    <div className='container'>
      <h1>LoginScreen</h1>
      <hr />

      <div className="d-grid gap-1">
        <button 
        type="button" 
        className="btn btn-success btn-lg"
        onClick={handleLogin}
        >
          Login
          </button>
      </div>

    </div>
  )
}

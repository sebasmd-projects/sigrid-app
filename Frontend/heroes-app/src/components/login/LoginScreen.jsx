import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext)

  const handleLogin = () => {

    dispatch({
      type: types.login,
      payload: { name: "Sebastian" }
    })

    const lastPath = localStorage.getItem("lastPath") || "/"

    navigate(lastPath, { replace: true })


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

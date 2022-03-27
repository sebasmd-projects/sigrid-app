import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)
    const handleLogout = () => {
        setUser({})
    }

    return (
        <>
            <h1>LoginScreen</h1>
            <hr />

            <button type="button" className="btn btn-dark" onClick={() => setUser(
                {
                    name: "Juan",
                    id: 0
                }
            )}>Login</button>


            <button type="button" className="btn btn-light" onClick={handleLogout}>Logout</button>
        </>
    )
}

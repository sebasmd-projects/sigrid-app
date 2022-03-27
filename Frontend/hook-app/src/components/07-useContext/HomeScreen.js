import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const {user} = useContext(UserContext)
    
    console.log(user)
    return (
        <>
            <h1>HomeScreen</h1>
            <hr/>
            <p>Bienvenido {JSON.stringify(user.name, null, 3)} </p>
        </>
    )
}

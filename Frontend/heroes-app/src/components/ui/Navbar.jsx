import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

    const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login', { replace: true })
        console.log("logout")
    }

    return (
        <ul className="nav nav-tabs nav-fill navbar navbar-light justify-content-center">
            <li className='nav-item'>
                <NavLink className={isActiveStyle} to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className={isActiveStyle} to="/marvel">Marvel</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink className={isActiveStyle} to="/dc">DC</NavLink>
            </li>
            
            <li className='nav-item'>
                <NavLink className={isActiveStyle} to="/search">Search</NavLink>
            </li>
            <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className='dropdown-item'>
                        <NavLink className="justify-content-center" to="/login">Login</NavLink>
                    </li>
                    <li className='dropdown-item' onClick={handleLogout}>
                        <button className='btn'>Logout</button>
                    </li>
                </ul>
            </li>


        </ul>
    )
}

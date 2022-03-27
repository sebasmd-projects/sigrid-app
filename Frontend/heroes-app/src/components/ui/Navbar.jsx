import React, { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { types } from '../types/types';

import './NavBar.css'

export const NavBar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const isActiveStyle = (navData) => navData.isActive ? "nav-link active" : "nav-link"

    const navigate = useNavigate();

    const navLoginLi = () => {
        navigate('/login')
    }

    const handleLogout = () => {

        dispatch({
            type: types.logout,
        })

        navigate('/login', { replace: true })
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
                <ul className="dropdown-menu end-0" aria-labelledby="navbarDropdown">


                    {
                        user.logged &&
                        <>
                            <li className="dropdown-item disabled">
                                {user.name}
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                        </>
                    }


                    <li className='dropdown-item' onClick={navLoginLi}>
                        <button className='btn'>Login</button>
                    </li>
                    <li className='dropdown-item' onClick={handleLogout}>
                        <button className='btn'>Logout</button>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

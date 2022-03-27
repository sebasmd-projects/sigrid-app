import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../components/auth/authContext"


export const PublicRoute = ({children}) => {

    const {user} = useContext(AuthContext)


    return user.logged ? <Navigate to="/" /> : children
}

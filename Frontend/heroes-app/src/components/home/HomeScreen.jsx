import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'


export const HomeScreen = () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <h1>Hero App Content</h1>
      <hr />

      <h2>Ver Proyecto: </h2>

      {
        user.logged ? (
          <p><NavLink to="/marvel">Marvel</NavLink> | <NavLink to="/dc">DC</NavLink> | <NavLink to="/search">Search</NavLink></p>
        ) : <p><NavLink to="/login">Login</NavLink></p>
      }

      <hr />

      <h2>Primera Parte</h2>
      <ul>
        <li>
          SPA ( Single Page Application ) a profundidad
        </li>
        <li>
          Diferentes temas en la misma aplicación aplicados a diferentes rutas
        </li>
        <li>
          Multiples Routers
          <ul>
            <li>
              <b>ui/Navbar.jsx</b> - Navbar
            </li>
            <li>
              <b>routers/AppRouter.jsx</b> - AppRouter | Rutas generales o globales (Login y Dashboard)
            </li>
            <li>
              <b>routers/DashboardRoutes.jsx</b> - DashboardRoutes | Rutas de las pantallas
            </li>
          </ul>
        </li>
        <li>
          Push y Replace en el History - Regresar a la pantalla anterior o no guardar historial ("Login -&gt; Home"  | "Home -/&gt; Login")
        </li>
        <li>
          Leer argumentos por URL
        </li>
        <li>
          QueryParams <b>Query Params | Por URL</b>
        </li>
        <li>
          Aplicar filtros utilizando QueryStrings
        </li>
      </ul>

      <hr />
      <h2>Segunda Parte</h2>

      <ul>
        <li>
          Rutas públicas
        </li>
        <li>
          Rutas privadas
        </li>
        <li>
          Login y logout - Sin backend aún
        </li>
        <li>
          Recordar cuál fue la última ruta visitada para mejorar la experiencia de usuario.
        </li>
        <li>
          Context
        </li>
        <li>
          Reducer
        </li>
      </ul>



    </>
  )
}

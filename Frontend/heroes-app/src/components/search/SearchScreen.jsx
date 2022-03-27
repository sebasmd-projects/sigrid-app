import React, { useMemo } from 'react'
import queryString from 'query-string'

import { useNavigate, useLocation } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const { q = "" } = queryString.parse(location.search)

  const [values, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = values

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]) 

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText.toLowerCase()}`)
  }

  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      {
        (q === "")
          ? <div className='alert alert-info'> No has buscado ningún héroe </div>
          : ( heroesFiltered.length === 0 )
            && <div className='alert alert-danger'> No hay héroes que coincidan con tu búsqueda para "{q}"</div>
      }

      <div className='row'>

        <div className='col-12'>


          <form onSubmit={handleSearch}>

            <input
              type="text"
              className="form-control mb-3"
              name="searchText"
              id="searchText"
              placeholder="Buscar un heroe"
              value={searchText}
              onChange={handleInputChange}
            />


            <button
              type="submit"
              className="btn btn-primary col-12"
            >
              Buscar
            </button>
          </form>


        </div>

        <div className='col-12 mt-3'>
          <div className='row'>
            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
          </div>


        </div>

      </div>
    </>
  )
}

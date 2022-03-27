import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'
import { Error404Screen } from '../Error404/Error404Screen'

export const HeroScreen = () => {

  const { heroeId } = useParams()

  const hero = useMemo(() => {
    return getHeroById(heroeId)
  }, [heroeId])

  const imgPath = `/assets/img/heroes/${heroeId}.jpg`

  const navigate = useNavigate()

  const handleReturn = () => {
    // window.history.back()
    navigate(-1)
  }

  if (!hero) return <Error404Screen />

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={imgPath} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>
      <div className='col-8'>
        <h2>{hero.superhero}</h2>
        <ul className='list-group'>
          <li className='list-group-item'>
            <p>
              <b>Alter Ego: </b> {hero.alter_ego}
            </p>
            <p>
              <b>Publisher: </b> {hero.publisher}
            </p>
            <p>
              <b>First Appearance: </b> {hero.first_appearance}
            </p>

          </li>
        </ul>

        <h5 className='mt-5'>Characters</h5>
        <p>{hero.characters}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}

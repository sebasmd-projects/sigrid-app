import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            { loading && <p className='animate__pulse'>loading</p> }

            <div className='card-grid'>
                <ul>
                    {
                        images.map((img) => (
                            <GifGridItem
                                img={img}
                                key={img.id}
                            />

                        ))
                    }
                </ul>

            </div>
        </>
    )
}

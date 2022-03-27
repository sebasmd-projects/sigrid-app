import React from 'react'

export const GifGridItem = ( {img} ) => {

    return (
        <div className='card animate__backInLeft animate__delay-2s'>
             <p><a rel="noreferrer" href={img.url} target="_blank">{img.title}</a></p>
            <img src={img.url} alt={img.title} title={img.title}/>
        </div>
    )
}

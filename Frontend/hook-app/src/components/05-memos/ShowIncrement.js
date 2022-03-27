import React, {memo} from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log("Me volví a generar")

    return (
        <button
            className='btn btn-outline-success'
            onClick={
                () => {
                    increment(2)
                }
            }
        >
            Incrementar
        </button>
    )
})

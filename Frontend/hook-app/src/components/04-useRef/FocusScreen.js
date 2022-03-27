import React, { useRef } from 'react'
import "../03-examples/examples.css"

export const FocusScreen = () => {


    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Nombre'
            />

            <button
                type="button"
                class="btn btn-outline-primary mt-4"
                onClick={handleClick}
            >Focus</button>
        </>
    )
}

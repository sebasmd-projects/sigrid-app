import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import "../03-examples/examples.css"
import { Small } from './Small'

export const Memorize = () => {

    const { state: counter, increment } = useCounter(0)
    const [show, setShow] = useState(true)
    
    const handleShow = () => {
        setShow(!show)
    }

    return (
        <>
            <h1>Memorize</h1>
            <p>Counter: <Small value={counter} /></p>
            <hr />

            <button
                type="button"
                class="btn btn-success"
                onClick={increment}
            >
                +1
            </button>

            <button
                className='btn btn-outline-primary'
                onClick={handleShow}
            >
                {show ? 'Hide' : 'Show'}
            </button>
        </>
    )
}

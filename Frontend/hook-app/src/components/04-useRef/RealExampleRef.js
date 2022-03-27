import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import "../03-examples/examples.css"


export const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <h1>RealExampleRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button className='btn btn-danger' onClick={() => {
                setShow(!show)
            }}>
                {show ? 'Hide' : 'Show'}
            </button>
        </>
    )
}

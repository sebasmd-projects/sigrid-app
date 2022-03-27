import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

import "../03-examples/examples.css"

export const CallbackHook = () => {


    const [counter, setCounter] = useState(0)

    const increment = useCallback(
        (num) => {
            setCounter(c => c + num)
        }, [setCounter]
    )



    return (
        <>
            <h1>Callback Hook {counter} </h1>
            <hr />

            <ShowIncrement increment={increment} />
        </>
    )
}

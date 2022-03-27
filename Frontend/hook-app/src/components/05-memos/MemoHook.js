import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter'
import "../03-examples/examples.css"


export const MemoHook = () => {

    const { state: counter, increment } = useCounter(5000)
    const [show, setShow] = useState(true)
    const memoProcesosPesado = useMemo(() => procesoPesado(counter), [counter])

    const handleShow = () => {
        setShow(!show)
    }


    return (
        <>
            <h1>Memo Hook</h1>
            <h3>{counter}</h3>
            <hr />

            <p>{memoProcesosPesado}</p>

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

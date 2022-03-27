import React from 'react'
import './counter.css'

export const CounterApp = () => {

    const [state, setState] = React.useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    })

    const { counter1, counter2 } = state;

    return (
        <>
            <h1>{counter1} {counter2}</h1>

            <hr />

            <button className='btn btn-success'
                onClick={(e) => {
                    e.preventDefault()
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    });
                }}
            >Sum +1</button>
        </>
    )
}

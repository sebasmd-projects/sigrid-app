import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import "./examples.css"

export const MultipleCustomHooks = () => {

    

    const [valor, setValor] = useState(1)

    const increment = () => {
        setValor(valor + 1)
    }

    const decrement = () => {
        setValor(valor - 1)
    }

    const state = useFetch(`http://localhost:8000/api/qr/qrs-generated/${ valor }/`)

    const { loading, data } = state

    



    return (
        <div>
            <h1>Multiple Custom Hooks</h1>
            <hr />


            {
                loading
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className='blockquote text-center'>
                            <p>
                                Ver solo el QR: <a
                                    href={data.qr_code}
                                    className='mb-1'
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {data.file_name}
                                </a>
                            </p>

                            <img
                                src={data.qr_code}
                                alt={data.file_name}
                                title={data.file_name}
                            />

                            <footer className='blockquote-footer mt-1'>
                                <a
                                    href={data.url_or_text}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {data.url_or_text}

                                </a> &copy;
                            </footer>
                        </blockquote>
                    )


            }

            <button type='button' className="btn btn-success" onClick={decrement}>Anterior</button>
            <button type='button' className="btn btn-success" onClick={increment}>Siguiente</button>
            
        </div>
    )
}

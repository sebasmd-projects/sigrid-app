import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log("Componente Message on")

        const mouseMove = (e) => {
            console.log(":D")
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            console.log("Componente Message off")
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])


    return (
        <>
            <h3>Mensaje Random</h3>
        </>
    )
}

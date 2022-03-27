// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'
import "./effects.css"
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            name: "",
            email: "",
        }
    )

    const { name, email } = formState

    // useEffect(() => {
    //     console.log("Me ejecuto cuando algo cambia")
    // })

    // useEffect(() => {
    //     console.log("Solo me ejecuto una vez")
    // }, [])    

    // useEffect(() => {  
    //     console.log("Me ejecuto cuando el formulario cambia")
    // }, [formState])
    
    // useEffect(() => {
    //   console.log("Me ejecuto cuando el campo del correo cambia")
    // }, [email])
    

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1>SimpleForm</h1>
            <hr />

            <div className="form-group">
                <label for="" class="form-label">Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />

                <label for="" class="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your email"
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <hr />

            <div>{ (name === "Juan") && <Message />}</div>

        </>
    )
}

import React from 'react'
import { useForm } from '../../hooks/useForm'
import "./effects.css"

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm(
        {
            name: "",
            email: "",
            password: "",
        }
    )

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
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
                <label for="" class="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*******"
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    )
}

import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTask }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return
        }

        handleAddTask({
            id: new Date().getTime(),
            desc: description,
            done: false
        })

        reset()
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    placeholder="Qué actividad tienes pendiente?"
                    aria-describedby="description-help"
                    value={description}
                    onChange={handleInputChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-outline-success mb-4"
            >
                Agregar Tarea
            </button>
        </form>

    )
}

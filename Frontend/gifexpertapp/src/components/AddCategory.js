import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ func }) => {

    const [inputValue, setInputValue] = useState([''])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            func(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    const handleReset = (e) => {
        e.preventDefault()
        setInputValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <div className='center'>
                <button onClick={handleSubmit} className="add">Agregar</button>
                <button onClick={handleReset} className="reset">Reset</button>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    func: PropTypes.func.isRequired
}

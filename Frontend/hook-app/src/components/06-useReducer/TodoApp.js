import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import "./style.css"

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || []
}

export const TodoApp = () => {

    const [tasks, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const handleDelete = (id) => {

        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }


    const handleAddTask = (newTask) => {
        dispatch({
            type: 'add',
            payload: newTask
        })
    }


    return (
        <div>
            <h1>Todo App</h1>
            <h3>Tareas: <small>{tasks.length}</small></h3>
            <hr />

            <TodoAdd
            handleAddTask = {handleAddTask}
            />

            <div className='row'>
                <TodoList
                    tasks={tasks}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />

                
            </div>
        </div>
    )
}

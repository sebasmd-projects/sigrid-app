import React from 'react'

export const TodoListItem = ({task, i, handleDelete, handleToggle}) => {
    return (
        <>
            <div
                key={(task.id + i + 1) + "col"}
                className={`${task.done && 'complete'} col-7 hover`}
                onClick={
                    () => handleToggle(task.id)
                }
            >
                <li
                    key={(i + task.id) + task.desc}
                    className="list-group-item"
                >
                    {i + 1}. {task.desc}
                </li>
            </div>

            <div
                key={(task.id + i + 2) + "col"}
                className='col-3'
            >
                <button
                    type="button"
                    className={`btn ${task.done ? 'btn-warning' : 'btn-info'}`}
                    key={task.i + 1}
                    onClick={() => handleToggle(task.id)}
                >
                    {task.done ? 'Sin Realizar' : 'Realizado'}
                </button>
            </div>


            <div
                key={(task.id + i + 3) + "col"}
                className='col-2'
            >
                <button
                    type="button"
                    className="btn btn-danger"
                    key={task.i + 2}
                    onClick={() => handleDelete(task.id)}
                >
                    Borrar
                </button>
            </div>
        </>
    )
}

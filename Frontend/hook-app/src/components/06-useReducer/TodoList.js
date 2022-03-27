import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ tasks, handleDelete, handleToggle }) => {

    return (
        <>
            {
                tasks.map((task, i) => (
                    <TodoListItem
                        key={task.id}
                        task={task}
                        i={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                ))
            }
        </>

    )
}

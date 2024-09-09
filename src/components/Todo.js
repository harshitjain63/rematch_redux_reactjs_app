import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Todo() {

    const todosArray = useSelector((state) => {
        let todosIds = Object.keys(state.myTodos)
        return todosIds.map(id => ({
            ...state.myTodos[id],
            id,
        }))
    })

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch.myTodos.removeTodo(id)
    }

    const handleAsyncDelete = (id) => {
        dispatch.myTodos.asyncRemoveTodo(id)
    }

    return (
        <ul>
            {
                todosArray?.map(val => {
                    return (
                        <div key={val.id}>
                            <li>{val.todo}</li>
                            <button onClick={() => handleDelete(val.id)}>Delete</button>
                            <button onClick={() => handleAsyncDelete(val.id)}>Async Delete</button>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default Todo;
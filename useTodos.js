import { todoReducer } from "../08-useReducer/todoReducer"
import { useEffect, useReducer } from "react"

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodos = ( initialState = [] ) => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) =>  {
        const action = {
            type: 'Delete todo',
            payload: id
        }

        dispatch( action );
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle todo',
            payload: id
        }

        dispatch( action );
    }


  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}

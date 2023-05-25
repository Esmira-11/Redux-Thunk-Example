import React from 'react'
import { useSelector } from 'react-redux'


function TodosReport() {
    const { todos, loading } = useSelector(state => state.todoReducer);

  return (
    <>
    <h1>Todos length: {todos.length}</h1>
    </>
  )
}

export default TodosReport
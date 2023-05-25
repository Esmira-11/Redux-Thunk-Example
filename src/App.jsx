import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Todos from './pages/Todos'
import TodosReport from './pages/TodosReport'
import { useDispatch } from 'react-redux'
import { getTodos } from './store/slices/todoSlice'


function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    
      // dispatch(supplierActions.load())
      dispatch(getTodos())
  
  }, [])
  return (

    <>
     <div>
        <ul>
          <li><Link to='/todos'>Todos</Link></li>
          <li><Link to='/todosreport'>Todos Report</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/todos' element={<Todos/>}></Route> 
        <Route path='/todosreport' element={<TodosReport/>}></Route> 
      </Routes>

    </>
  )
}

export default App

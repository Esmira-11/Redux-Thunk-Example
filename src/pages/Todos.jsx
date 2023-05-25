import React from 'react'
import { useSelector } from 'react-redux'


function Todos() {

    const { todos, loading } = useSelector(state => state.todoReducer);

console.log(todos)
   return (<>
       {
           loading ? <h1>loading...</h1> : <ul>
               {
                   todos && todos.map((item) => <li key={item.id}>{item.title}</li>)
                   
               }
           </ul>
       }

   </>
   )
}

export default Todos
import React from 'react'
import Navbar from './componets/Navbar'
import Form from './componets/Form'
import ListGroup from './componets/ListGroup'
import { TodoProvider } from "./context/TodoContext"
const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className="container">
        <Form />
        <ListGroup />
      </div>
    </TodoProvider>
  )
}

export default App;

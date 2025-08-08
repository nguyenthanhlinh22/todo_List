import React from 'react'
import './App.css'
import TodoItem from './compoents/TodoItem'

function App() {
  return (
    <div>
      <div>
        <input type="text" placeholder='add new task' />
        <TodoItem name="Đi chơi" />
      </div>
    </div>
  )
}

export default App

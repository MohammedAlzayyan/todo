import React, { useRef, useState } from 'react'

import TodoForm from './TodoForm'
import Todo from './Todo'

import './Todo.css'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [editTodo, setEditTodo] = useState(null)

  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    inputRef.current.focus()
    const todoValue = inputRef.current?.value
    console.log(todoValue)

    if (!editTodo) {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: input,
        isComplete: false,
      })
      setInput('')
    } else {
      updateTodo(editTodo.id, input, editTodo.isComplete)
      //   updateTodo(editTodo)
    }
  }

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      alert('Name must be filled out')
      return
    }
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  const handleIsComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isComplete: !item.isComplete }
        }
        return item
      }),
    )
  }

  const updateTodo = (id, title, isComplete) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, title, isComplete } : todo,
    )
    setTodos(newTodos)
    setInput('')
    setEditTodo(null)
  }

  const handleEdit = (id) => {
    const e = todos.find((todo) => todo.id === id)
    setInput(e.title)
    setEditTodo(e)
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <div className="todoList">
        <div className="cover-img">
          <div className="cover-inner">
            <h3 id="dayName">TO DO LIST</h3>
          </div>
        </div>

        <div className="content">
          <TodoForm
            handleSubmit={handleSubmit}
            input={input}
            editTodo={editTodo}
            setInput={setInput}
            handleChange={handleChange}
            anyRef={inputRef}
          />
          <Todo
            todos={todos}
            handleIsComplete={handleIsComplete}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default TodoList

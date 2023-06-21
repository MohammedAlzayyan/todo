import React from 'react'
import { Input } from './Input'

const TodoForm = (props) => {
  //   const handleChange = (e) => {
  //     props.setInput(e.target.value)
  //   }

  return (
    <div>
      <form className="todo-form" onSubmit={props.handleSubmit}>
        <Input
          anyRef={props.anyRef}
          input={props.input}
          handleChange={props.handleChange}
        />
        {/* <input
          className="todo-input"
          type="text"
          name="title"
          placeholder="Add a todo"
          value={props.input}
          ref={props.anyRef}
          onChange={props.handleChange}
          required
        /> */}
        <button type="submit" className="todo-button">
          {props.editTodo ? 'Edit' : 'Add'}
        </button>
      </form>
    </div>
  )
}

export default TodoForm

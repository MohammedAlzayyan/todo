import React from 'react'

import IconsForm from './IconsForm'

function Todo({ todos, handleIsComplete, handleEdit, handleDelete }) {
  return (
    <div style={{ height: '300px', overflow: 'auto', paddingRight: '5px' }}>
      {todos.map((todo) => (
        <div
          //   className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          className="todo"
          key={todo.id}
        >
          <div
            // key={todo.id}
            style={{
              color: todo.isComplete ? 'gray' : 'white',
              textDecoration: todo.isComplete ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </div>
          <div className="icons">
            <IconsForm
              todo={todo}
              style={{ fontSize: '20px', margin: '5px' }}
              handleIsComplete={handleIsComplete}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
            {/* <AiFillCheckCircle
          className="icon-edit"
          color={todo.isComplete ? 'red' : 'green'}
          onClick={() => handleIsComplete(todo)}
        />
        <AiFillEdit className="icon-edit" onClick={() => handleEdit(todo.id)} />
        <AiFillEdit className="icon-edit" onClick={() => console.log(todos)} />
        <AiFillDelete onClick={() => handleDelete(todo.id)} /> */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Todo

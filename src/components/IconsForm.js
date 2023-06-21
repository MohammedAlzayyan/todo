import React from 'react'

import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillCheckCircle } from 'react-icons/ai'

function IconsForm({
  todo,
  style,
  handleIsComplete,
  handleEdit,
  handleDelete,
}) {
  return (
    <div>
      <AiFillCheckCircle
        onClick={() => handleIsComplete(todo)}
        style={{ color: todo.isComplete ? 'red' : 'green', ...style }}
      />
      <AiFillEdit
        onClick={() => handleEdit(todo.id)}
        style={{ color: 'blue', ...style }}
      />
      <AiFillDelete
        onClick={() => handleDelete(todo.id)}
        style={{ color: 'red', ...style }}
      />
    </div>
  )
}

export default IconsForm

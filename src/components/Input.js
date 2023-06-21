export const Input = (props) => {
  return (
    <input
      className="todo-input"
      type="text"
      name="title"
      placeholder="Add a todo"
      value={props.input}
      ref={props.anyRef}
      onChange={props.handleChange}
      required
    />
  )
}

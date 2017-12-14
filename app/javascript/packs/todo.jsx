import React from "react"
import Http from './http'

export class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.toggleStatus = this.toggleStatus.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.state = {todo: props.todo}
  }

  render() {
    const {todo} = this.state
    const completeClass = todo.complete ? "complete" : null
    return (
      <div className={`todo ${completeClass}`}>
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onClick={this.toggleStatus}
        />
        <input
          className="todo-field"
          defaultValue={todo.title}
          onBlur={this.updateTodo}
        />
        <button className="todo-delete" onClick={this.deleteTodo}>✕</button>
      </div>
    )
  }

  updateTodo(e) {
    const {todo} = this.state
    const newTitle = e.target.value

    if (newTitle !== todo.title) {
      const requestBody = {todo: {title: newTitle}}
      Http.put(`/todos/${todo.id}`, requestBody)
    }
  }

  toggleStatus() {
    const {todo} = this.state
    const complete = !todo.complete
    const requestBody = {todo: {complete}}
    this.setState({
      todo: {
        ...todo,
        complete: complete
      }
    })

    Http.put(`/todos/${todo.id}`, requestBody)
  }

  deleteTodo() {
    const {todo} = this.state
    const {deleteTodo} = this.props

    deleteTodo(todo)
  }
}
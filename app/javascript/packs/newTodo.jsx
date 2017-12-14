import React from "react"

export class NewTodo extends React.Component {
  constructor(props) {
    super(props)
    this.submitTodo = this.submitTodo.bind(this)
    this.state = {title: null}
  }

  render() {
    return (
      <div className="todo new-todo">
        <input
          className="todo-field"
          placeholder="New Todo"
          ref={el => this.titleInput = el}
        />
        <button className="todo-create" onClick={this.submitTodo}>+</button>
      </div>
    )
  }

  submitTodo() {
    const {createTodo} = this.props
    createTodo({title: this.titleInput.value})
    this.titleInput.value = ''
  }
}
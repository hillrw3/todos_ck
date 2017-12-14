import React from 'react'
import PropTypes from 'prop-types'
import {renderComponent} from "./application"
import {Todo} from "./todo"
import {NewTodo} from "./newTodo"
import Http from './http'

export default class Todos extends React.PureComponent {
  constructor(props) {
    super(props)
    this.createTodo = this.createTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

    this.state = {
      todos: this.props.todos
    }
  }

  render() {
    const {todos} = this.state

    return (
      <div className="todos panel">
        <h2 className="todos-header">Todo List</h2>
        {
          todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={this.deleteTodo}/>)
        }
        <NewTodo createTodo={this.createTodo}/>
      </div>
    )
  }

  createTodo(todo) {
    Http.post('/todos', todo)
      .then((newTodo) => {
        const {todos} = this.state
        this.setState({todos: [...todos, newTodo]})
      })

  }

  deleteTodo(todo) {
    Http.delete(`/todos/${todo.id}`)
      .then((deletedTodo) => {
        const {todos} = this.state
        const newTodos = todos.filter(t => t.id !== deletedTodo.id)
        this.setState({todos: newTodos})
      })
  }
}

Todos.defaultProps = {
  todos: []
}

Todos.propTypes = {
  todos: PropTypes.array
}

renderComponent((data) => <Todos {...data} />)

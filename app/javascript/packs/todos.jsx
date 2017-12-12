import React from 'react'
import PropTypes from 'prop-types'
import {renderComponent} from "./application"

export default class Todos extends React.PureComponent {
  render() {
    const {todos} = this.props

    return (
      <div className="todos panel">
        <h2>Todo List</h2>
        <a href="todos/new">+</a>
        {
          todos.map(todo => {
            return <p className="todo" key={todo.id}>{todo.title}</p>
          })
        }
      </div>
    )
  }
}

Todos.defaultProps = {
  todos: []
}

Todos.propTypes = {
  todos: PropTypes.array
}

renderComponent((data) => <Todos {...data} />)

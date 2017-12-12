import React from "react"
import {renderComponent} from "./application"

class TodoForm extends React.Component {
  render() {
    return(
      <div className="todo-form panel">
        <h2>Add a Todo</h2>
        <form action="/todos" method="post">
          <label className="todo-form--field">
            Title
            <input required type="text" name="todo[title]"/>
          </label>
          <button type="submit">Save!</button>
        </form>
      </div>
    )
  }
}

renderComponent((data) => <TodoForm />)
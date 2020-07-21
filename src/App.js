import React, { Component } from 'react'
import TodoInput from './componnents/TodoInput'
import TodoList from './componnents/TodoList'

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}


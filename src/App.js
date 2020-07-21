import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './componnents/TodoInput'
import TodoList from './componnents/TodoList'
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  state={
    items:[],
    item:'',
    id:uuidv4(),
  }
  render() {
    return (
      <div>
        <TodoInput/>
        <TodoList/>
      </div>
    )
  }
}


import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todoList: []
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-4">Todos App</h1>
          </div>
        </div>
        <form className="mb-2" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autoComplete="off" />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">Add</button>
            </div>
          </div>
        </form>

        <ul className="list-group">
          {
            this.state.todoList.map((item, index) => {
              return <li className="list-group-item" key={index}>
                {item}
                <button className="btn btn-outline-danger float-right" onClick={(event) => { this.deleteTask(event, index) }}>Delete</button>
              </li>
            })
          }
        </ul>
      </div>
    );
  }

  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.length > 0 && taskDesc.trim() != '') {
      this.setState({ todoList: [...this.state.todoList, taskDesc] });
      event.target.reset();
    }
    event.preventDefault();
  }

  deleteTask = (event, index) => {
    var taskArray = [...this.state.todoList];
    taskArray.splice(index, 1);
    this.setState({ todoList: taskArray });

  }

}


export default App;

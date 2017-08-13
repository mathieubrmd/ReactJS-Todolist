import React, { Component } from 'react';
import Header from './components/Layout/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Modal from './components/Modal/Modal';
import TodoForm from './components/TodoForm/TodoForm';
import IDGenerator from './utils/IDGenerator';
import './App.css';

class App extends Component {

  state = {
    showForm: false,
    showTodo: false,
    todoToShow: {},
    todos: []
  }

  onClick() {
    this.setState({
      showForm: true,
    });
  }

  onClose() {
    this.setState({
      showForm: false,
    });
  }

  onSubmit({title, description}) { 
    let newTodo = { title, description, uid: new IDGenerator().guid(), isDone: false };
    this.setState({ todos: [...this.state.todos, newTodo], showForm: false });
  }

  onShowTodo(todo) {
    this.setState({ todoToShow: todo, showTodo: true });
  }

  onDeleteTodo(todo) {
    this.setState({
      todos: this.state.todos.filter((item) => item.uid !== todo.uid)
    })
  }

  onCheckTodo(todo) {
    this.setState({
      todos: this.state.todos.map((item) => {
        if(item.uid === todo.uid) 
          return {...item, isDone: !todo.isDone };
        return item;
      })
    });
  }

  closeTodoModal() {
    this.setState({ showTodo: false });
  }

  render() {
    return (
      <div className="app-container">
        <Header 
          title="Todo List" 
          buttonIcon="+" 
          onClick={this.onClick.bind(this)}
        />
        <TodoList 
          todos={this.state.todos} 
          onShowTodo={this.onShowTodo.bind(this)}
          onDeleteTodo={this.onDeleteTodo.bind(this)}
          onCheckTodo={this.onCheckTodo.bind(this)} 
        />
        <Modal
          headerText="Create a todo"
          onClose={this.onClose.bind(this)}
          visible={this.state.showForm}
        >
          <TodoForm onSubmit={this.onSubmit.bind(this)} />
        </Modal>

        <Modal
          headerText={this.state.todoToShow.title}
          onClose={this.closeTodoModal.bind(this)}
          visible={this.state.showTodo}
        >
          <p>{this.state.todoToShow.description}</p>
        </Modal>

      </div>
    );
  }
}

export default App;

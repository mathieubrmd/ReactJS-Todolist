import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

class TodoList extends Component {
    // The key musts be unique. The best is to use an id provided by the API.
    renderTodos() {
        return this.props.todos.map(todo => 
            <TodoItem 
                key={todo.uid} 
                todo={todo}
                onShowTodo={this.props.onShowTodo}
                onDeleteTodo={this.props.onDeleteTodo}
                onCheckTodo={this.props.onCheckTodo}
            />
        );
    }


    render() {
        return (
            <div className="todolist">
                {this.renderTodos()}
            </div>
        );
    }
}

export default TodoList;

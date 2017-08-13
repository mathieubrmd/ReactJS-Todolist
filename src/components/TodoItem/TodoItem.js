import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    onLeftButtonClick() {
        this.props.onCheckTodo(this.props.todo);
    }

    onRightButtonClick() {
        this.props.onDeleteTodo(this.props.todo);
    }

    onClick() {
        this.props.onShowTodo(this.props.todo);
    }

    renderLeftButton() {
        if (this.props.todo.isDone) {
            return (
                <p className="todo-left-button-check" onClick={this.onLeftButtonClick.bind(this)}>
                    <i className="fa fa-check" aria-hidden="true"></i>
                </p>
            );
        }

        return (
            <p className="todo-left-button" onClick={this.onLeftButtonClick.bind(this)}>
                <i className="fa fa-check" aria-hidden="true"></i>
            </p>
        );
    }

    render() {
        const { todo } = this.props;

        return (
            <div className="todo-container">
                {this.renderLeftButton()}
                <p className="todo-title" onClick={this.onClick.bind(this)}>
                    {todo.title}
                </p>
                <p className="todo-right-button" onClick={this.onRightButtonClick.bind(this)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </p>
            </div>
        );
    }
}

export default TodoItem;

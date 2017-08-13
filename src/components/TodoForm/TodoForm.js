import React, { Component } from 'react';
import TextField from '../common/TextField';
import Button from '../common/Button';
import './TodoForm.css';

class TodoForm extends Component {

    state = { title: '', description: '' };

    onDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    onTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    onSubmit() {
        const { title, description } = this.state;

        this.props.onSubmit({ title, description });
    }

    render() {
        return (
            <div> 
                <TextField 
                label="Title"
                placeholder="todo name"
                rows="1"
                onChange={this.onTitleChange.bind(this)}
                value={this.state.title}
              />
              <TextField
                label="description"
                placeholder="Jump from the rooftop of my building just to see if I can survive"
                rows="5"
                autoresize={true}
                onChange={this.onDescriptionChange.bind(this)}
                value={this.state.description}
              />
              <Button
                onClick={this.onSubmit.bind(this)}
              >
                Save
              </Button>
            </div>
        );
    }
}

export default TodoForm;

import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    id = 3; // 이미 0,1,2가 존재하므로 3으로 설정

    state = {
        input: "",
        todos: [
            {id: 0, text: 'react 1', checked: false},
            {id: 1, text: 'react 2', checked: false},
            {id: 2, text: 'react 3', checked: false}
        ]
    }

    // App props input에 입력된 값 전달
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }
    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            }) 
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter')
        {
            this.handleCreate();
        }
    }

    render() {
        const { input } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress
        } = this;

        return (
            <TodoListTemplate form={(
                <Form
                    value = {input}
                    onKeyPress = {handleKeyPress}
                    onChange = {handleChange}
                    onCreate = {handleCreate}
                />
            )}>
                <TodoItemList />
            </TodoListTemplate>
        );
    }
}
    
export default App;

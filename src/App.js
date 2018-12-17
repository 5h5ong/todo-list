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
    handleToggle = (id) => {
        const { todos } = this.state;

        // parameter로 받은 id를 가지고 몇번째 아이템인지 찾음.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];  // 선택한 object

        const nextTodos = [...todos];   // 배열 복사

        // 기존의 값들을 복사하고 checked 값을 덮어쓰기 
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }
    // 다른 방식으로 구현한 handleToggle
    handleToggle2 = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        const selected = todos[index];

        this.setState({
            todos: [
                ...todos.slice(0, index),
                {
                    ...selected,
                    checked: !selected.checked
                },
                ...todos.slice(index+1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        // 비구조화 할당(destructuring assignment)
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle
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
                <TodoItemList todos={todos} onToggle={handleToggle}/>
            </TodoListTemplate>
        );
    }
}
    
export default App;

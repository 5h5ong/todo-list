import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component
{
    render()
    {
        //const { todos, onToggle, onRemove } = this.Props;
        return (
            <div>
                <TodoItem text="test1" />
                <TodoItem text="react" />
                <TodoItem text="text3" />
            </div>
        );
    };
}

export default TodoItemList;
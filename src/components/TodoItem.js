import React, { Component } from 'react';
import "./TodoItem.css";

class TodoItem extends Component
{
    render()
    {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    // e.stopPropagation ->
                    // event가 해당 부모의 event까지 전달되지 않도록 만들어줌. (event의 확산을 막아줌)
                    // 즉, 부모의 onToggle은 실행되지 않고 onRemove만 실행되게 됨.
                    e.stopPropagation();
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">√</div>)
                }
            </div>
        );
    }
}

export default TodoItem;

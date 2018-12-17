import React from 'react';
import './TodoListTemplate.css'

// 함수형 컴포넌트
// 원래 Props로 받아야 하는 것을 비구조화 할당(destructuring assignment)을 이용해 ({form, children})로 받음.
// 여러 종류의 JSX를 component로 넣어줄 때 편안한 방법. 이상 X
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                To-Do
            </div>
            {/* input field 생성 */}
            <section className="form-wrapper">
                {form}
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;
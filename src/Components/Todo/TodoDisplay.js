import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from './Modal';  // Modal 컴포넌트 임포트

const TodoDisplayPage = styled.div`
    background-color: white;
    margin: 5vh 5vw 5vh 10vw;
    width: 35vw;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: inset 0 5px 5px 3px rgba(0, 0, 0, 0.1);
`;

const PrintYear = styled.div`
    margin: 5vh 5vw 0 5vw;
    font-size: 1.5rem;
`;

const PrintDay = styled.div`
    margin: 0 5vw 5vh 5vw;
    font-size: 1rem;
`;

const Todo = styled.div`
    margin: 3vh 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
`;

const TodoItem = styled.div`
    font-size: 1rem;
    display: flex;
`;

const TodoColorBar = styled.div`
    width: 1vw;
    margin-right: 1vw;
    background-color: ${({ priority }) => {
        switch (priority) {
            case 'high':
                return '#DC5E5E'; // 높은 중요도: 빨간색
            case 'medium':
                return '#DCD15E'; // 중간 중요도: 주황색
            case 'low':
                return '#6DDC5E'; // 낮은 중요도: 초록색
            default:
                return 'black'; // 기본: 검정색
        }
    }};
`;

const TodoCheck = styled.input`
    width: 24px;
    height: 24px;
    margin: 0;
    border: 2px solid #4caf50;
`;

const Horizon = styled.hr`
    height: 1px;
    background-color: black;
    margin: 3vh 3vw 0vh 3vw;
`;

const AddTodoButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    align-self: center;
    position: fixed;
    bottom: 70px;
    border: none;
    background-color: #5b51e2;
    font-size: 30px;
    color: white;
`;

const TodoDisplay = ({ setIsAnyTodoChecked, updateTodoCount }) => {
    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 샘플 할 일 데이터 추가
    useEffect(() => {
        const sampleTodos = [
            { id: 1, title: 'Learn React', priority: 'high', isChecked: false },
            { id: 2, title: 'Do Homework', priority: 'medium', isChecked: false },
            { id: 3, title: 'Grocery Shopping', priority: 'low', isChecked: false }
        ];
        setTodos(sampleTodos);
    }, []);

    // 체크박스 상태 변경 핸들러
    const handleCheckboxChange = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
        );
        setTodos(updatedTodos);

        // 하나라도 체크된 항목이 있는지 확인
        const anyChecked = updatedTodos.some(todo => todo.isChecked);
        setIsAnyTodoChecked(anyChecked); // 부모 컴포넌트에 상태 전달
        const checkedCount = updatedTodos.filter(todo => todo.isChecked).length;
        updateTodoCount(checkedCount);
    };

    // 새로운 할 일 추가 핸들러
    const handleAddTodo = (newTodo) => {
        setTodos([...todos, { id: todos.length + 1, ...newTodo, isChecked: false }]);
    };

    // 모달 열기/닫기 핸들러
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <TodoDisplayPage>
            <PrintYear>2024년</PrintYear>
            <PrintDay>9월 29일, 일요일</PrintDay>
            {todos.map((todo) => (
                <Todo key={todo.id}>
                    <TodoItem>
                        <TodoColorBar priority={todo.priority}></TodoColorBar>
                        <div>{todo.title}</div>
                    </TodoItem>
                    <TodoCheck
                        type="checkbox"
                        checked={todo.isChecked}
                        onChange={() => handleCheckboxChange(todo.id)}
                    />
                </Todo>
            ))}
            <Horizon />
            <AddTodoButton onClick={handleOpenModal}>+</AddTodoButton>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleAddTodo}
            />
        </TodoDisplayPage>
    );
};

export default TodoDisplay;

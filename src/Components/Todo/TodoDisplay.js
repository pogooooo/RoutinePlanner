import styled from 'styled-components';
import { format } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';
import React, {useState} from "react";
import Modal from './Modal'


const TodoDisplayPage = styled.div`
    background-color: white;
    margin: 5vh 5vw 5vh 10vw;
    width: 35vw;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const PrintYear = styled.div`
    margin: 5vh 5vw 0 5vw;
    font-size: 1.5rem;
`

const PrintDay = styled.div`
    margin: 0 5vw 5vh 5vw;
    font-size: 1rem;
`

const Todo = styled.div`
    margin: 3vh 5vw 0 5vw;
    display: flex;
    justify-content: space-between;
`

const TodoItem = styled.div`
    font-size: 1rem;
    display: flex;
`

const TodoColorBar = styled.div`
    width: 1vw;
    margin-right: 1vw;
    background-color: ${({ priority }) => {
    switch (priority) {
        case 'high':
            return '#DC5E5E';      // 높은 중요도: 빨간색
        case 'medium':
            return '#DCD15E';       // 중간 중요도: 주황색
        case 'low':
            return '#6DDC5E';        // 낮은 중요도: 초록색
        default:
            return 'black';        // 기본: 검정색
    }
}};
`

const TodoCheck = styled.input`
    width: 24px;
    height: 24px;
    margin: 0;
    border: 2px solid #4CAF50;
    
    & > input[type="checkbox"] {
        visibility: hidden;
    }
`

const Horizon = styled.hr`         /* 기본 테두리 제거 */
    height: 1px;                /* 선의 높이 */
    background-color: black;  /* 배경 색상 설정 */
    margin: 3vh 3vw 0vh 3vw;
`

const AddTodoButton = styled.button`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    align-self: center;
    position: fixed;
    bottom: 70px;
    border: none;
    background-color: #5B51E2;
    font-size: 30px;
    color: white;
`

const TodoDisplay = () => {

    const today = new Date();
    const YearMonth = format(today, 'yyyy MMMM', { locale: enUS });
    const DateWeek = format(today, 'd일 EEEE', { locale: ko });

    const todos = [
        { id: 1, text: 'React 공부하기', priority: 'high' },
        { id: 2, text: '점심 준비하기', priority: 'medium' },
        { id: 3, text: '운동하기', priority: 'low' }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddTodo = (newTodo) => {
        // Logic to add new todo to the list
        console.log(newTodo); // Here you would typically update state or send to backend
    };

    return(
        <TodoDisplayPage>
            <PrintYear>{YearMonth}</PrintYear>
            <PrintDay>{DateWeek}</PrintDay>
            {todos.map((todo) => (

                <Todo>
                    <TodoItem>
                        <TodoColorBar priority={todo.priority}></TodoColorBar>
                        <div>{todo.text}</div>
                    </TodoItem>
                    <TodoCheck type="checkbox" />
                </Todo>
            ))}
            {/*<Horizon/>*/}
            <AddTodoButton onClick={handleOpenModal}>+</AddTodoButton>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddTodo} />
        </TodoDisplayPage>
    )
}

export default TodoDisplay

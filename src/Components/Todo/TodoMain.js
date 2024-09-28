import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { enUS, ko } from 'date-fns/locale';

const TodoMainStyle = styled.div `
        display: flex;
        background-color: rgba(0, 0, 0, 0.05);
        height: 95vh;
    `

const TodoDisplay = styled.div`
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

const LeftDiv = styled.div`
        margin: 5vh 10vw 5vh 0;
        width: 45vw;
    `

const Profile = styled.div`
    background-color: white;
    height: 45vh;
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    margin-bottom: 5vh;
`

const UserProfile = styled.div`
    display: flex;
    justify-content: space-between;
`

const User = styled.div`
    display: flex;
`

const UserIcon = styled.div`
    width: 4vw;
    height: 4vw;
    margin: 5vh 1vw 0 3vw;
    background-color: #5B51E2;
    border-radius: 50%;
`

const UserName = styled.div`
    margin-top: 5vh;
    font-size: 1.3rem;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center;
`

const UserLevel = styled.div`
    margin: 6vh 3vw 0 0;
    width: 20vw;
    position: relative;
`

const UserLevelText = styled.div`
    text-align: right;
    font-size: 1rem;
`

const UserLevelBar = styled.div`
    position: relative;
    height: 3px;
    background-color: black;
    width: 20vw;
`

const UserLevelProgress = styled.div`
    z-index: 1;
    position: absolute;
    height: 3px;
    background-color: #5B51E2;
    width: 10vw;
`

const UserInfo = styled.div`
    height: 25vh;
    margin-top: 5vh;
    display: flex;
`

const UserProgress = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    margin-left: 3vw;
    padding-top: 1vh;
    border-radius: 25px;
    width: 20vw;
    height: 25vh;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const UserProgressItem = styled.div`
    margin: 1vh 1vw 1vh 1vw;
    display: flex;
    justify-content: space-between;
    height: 3vh;
    position: relative;
`

const UserProgressName = styled.div`
    font-size: 1rem;
    margin-right: 10px;
`

const UserProgressBar = styled.div`
    background-color: #5B51E2;
    color: white;
    height: 3vh;
    width: ${props => `${props.progress/100*60}%`};
    position: absolute;
    margin-left: 40%;
    z-index: 1;
    border-radius: 25px;
    padding-left: 10px;
`

const UserProgressBackgroundBar = styled.div`
    background-color: gray;
    position: relative;
    height: 3vh;
    width: 60%;
    border-radius: 25px;
`

const UserRank = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    margin-right: 3vw;
    margin-left: 3vw;
    height: 25vh;
    width: 12vw;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const HeatMap = styled.div`
        background-color: dodgerblue;
        height: 35vh;
    `

const TodoMain = ( ) => {

    const today = new Date();
    const YearMonth = format(today, 'yyyy MMMM', { locale: enUS });
    const DateWeek = format(today, 'd일 EEEE', { locale: ko });

    const todos = [
        { id: 1, text: 'React 공부하기', priority: 'high' },
        { id: 2, text: '점심 준비하기', priority: 'medium' },
        { id: 3, text: '운동하기', priority: 'low' }
    ];

    const todoProgress = [
        { id: 1, text: 'React 공부하기', progress: 36 },
        { id: 2, text: '점심 준비하기', progress: 10 },
        { id: 3, text: '운동하기', progress: null }
    ];

    const userRankInfo = [
        { id: 1, text: 'React 공부하기', progress: 36 },
        { id: 1, text: 'React 공부하기', progress: 36 }
    ]

    return(
        <TodoMainStyle>
            <TodoDisplay>
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
                <Horizon/>
            </TodoDisplay>
            <LeftDiv>
                <Profile>
                    <UserProfile>
                        <User>
                            <UserIcon></UserIcon>
                            <UserName>HYUNJUNG</UserName>
                        </User>

                        <UserLevel>
                            <UserLevelText>14Lv</UserLevelText>
                            <UserLevelProgress></UserLevelProgress>
                            <UserLevelBar></UserLevelBar>
                        </UserLevel>
                    </UserProfile>
                    <UserInfo>
                        <UserProgress>
                            {todoProgress
                                .filter(todo => todo.progress !== null)
                                .map((todo) => (
                                <UserProgressItem>
                                    <UserProgressName>{todo.text}</UserProgressName>
                                    <UserProgressBar progress={todo.progress}>{todo.progress}%</UserProgressBar>
                                    <UserProgressBackgroundBar></UserProgressBackgroundBar>
                                </UserProgressItem>
                            ))}
                        </UserProgress>
                        <UserRank>
                            <UserRankName></UserRankName>
                            <UserCurrentRank></UserCurrentRank>
                        </UserRank>
                    </UserInfo>
                </Profile>
                <HeatMap>
                    here heatmap
                </HeatMap>
            </LeftDiv>
        </TodoMainStyle>
    )
}

export default TodoMain

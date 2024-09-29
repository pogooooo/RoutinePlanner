import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TodoDisplay from "./TodoDisplay";


const TodoMainStyle = styled.div`
    display: flex;
    height: 93vh;
`;

const LeftDiv = styled.div`
    margin: 5vh 10vw 5vh 0;
    width: 45vw;
`;

const Profile = styled.div`
    background-color: white;
    height: 45vh;
    border-radius: 25px;
    box-shadow: inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    margin-bottom: 5vh;
`;

const UserProfile = styled.div`
    display: flex;
    justify-content: space-between;
`;

const User = styled.div`
    display: flex;
    cursor: pointer;
`;

const UserIcon = styled.div`
    width: 3vw;
    height: 3vw;
    margin: 5vh 1vw 0 3vw;
    background-color: #5B51E2;
    border-radius: 50%;
`;

const UserName = styled.div`
    margin-top: 5vh;
    font-size: 1.3rem;
    display: flex;
    align-items: center; /* 세로 중앙 정렬 */
    justify-content: center;
`;

const UserLevel = styled.div`
    margin: 6vh 3vw 0 0;
    width: 20vw;
    position: relative;
`;

const UserLevelText = styled.div`
    text-align: right;
    font-size: 1rem;
`;

const UserLevelBar = styled.div`
    position: relative;
    height: 3px;
    background-color: black;
    width: 20vw;
`;

const UserLevelProgress = styled.div`
    z-index: 1;
    position: absolute;
    height: 3px;
    background-color: #5B51E2;
    width: 10vw;
`;

const UserInfo = styled.div`
    height: 25vh;
    margin-top: 5vh;
    display: flex;
`;

const UserProgress = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    margin-left: 3vw;
    padding-top: 1vh;
    border-radius: 25px;
    width: 20vw;
    height: 20vh;
    box-shadow: inset 0 5px 5px 3px rgba(0, 0, 0, .1);
`;

const UserProgressItem = styled.div`
    margin: 1vh 1vw 1vh 1vw;
    display: flex;
    justify-content: space-between;
    height: 3vh;
    position: relative;
`;

const UserProgressName = styled.div`
    font-size: 1rem;
    margin-right: 10px;
`;

const UserProgressBar = styled.div`
    background-color: #5B51E2;
    color: white;
    height: 3vh;
    width: ${props => `${props.progress / 100 * 60}%`};
    position: absolute;
    margin-left: 40%;
    z-index: 1;
    border-radius: 25px;
    padding-left: 10px;
`;

const UserProgressBackgroundBar = styled.div`
    background-color: gray;
    position: relative;
    height: 3vh;
    width: 60%;
    border-radius: 25px;
`;

const UserRank = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    margin-right: 3vw;
    margin-left: 3vw;
    height: 20vh;
    width: 12vw;
    box-shadow: inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-top: 1vh;
    cursor: pointer;
`;

const UserRankName = styled.div`
    margin: 1vh 1vw 1vh 1vw;
    font-size: 1.5rem;
`;

const UserCurrentRank = styled.div`
    margin: 3vh 1vw 1vh 1vw;
    font-size: 2rem;
    text-align: center;
`;

const HeatMap = styled.div`
    background-color: white;
    border-radius: 25px;
    height: 30vh;
    box-shadow: inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
`;

const HeatMapTitle = styled.div`
    font-size: 1.5rem;
    margin: 5vh 0 0 3vw;
`;

const HeatMapLabel = styled.div`
    display: flex;
    margin-top: 3vh;
    width: 600px;

    & > span {
        margin-right: 190px;
    }
`;

const GridDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(30, 20px); // 전체 30칸, 각 칸 20px
    grid-template-rows: repeat(3, 20px); // 총 3줄
`;

const Cell = styled.div`
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.4);
`;

const ColoredCell = styled(Cell)`
    background: ${props => props.color};
`;

const TodoMain = ({userList}) => {
    const [isAnyTodoChecked, setIsAnyTodoChecked] = useState(false);
    const [sortedUserList, setSortedUserList] = useState([]);
    const [user3Index, setUser3Index] = useState(null);  // user3의 인덱스를 상태로 관리

    // 30 x 3 칸의 grid 데이터 생성
    const data = new Array(90).fill(false);
    if (isAnyTodoChecked) data[data.length - 1] = true; // 오른쪽 아래 칸 색상 변경

    const todoProgress = [
        { id: 1, text: 'React 공부하기', progress: 36 },
        { id: 2, text: '점심 준비하기', progress: 10 },
        { id: 3, text: '운동하기', progress: null }
    ];

    const sortUserListByTodoCount = (userList) => {
        // userList 복사
        const sortedList = [...userList].sort((a, b) => b.todoCount - a.todoCount); // todoCount 기준 내림차순 정렬
        // 정렬 후 user3의 인덱스를 찾음
        const user3Index = sortedList.findIndex(user => user.username === "user3");
        return { sortedList, user3Index };
    };


    // 체크된 Todo 항목의 수를 업데이트하는 함수
    const updateTodoCount = (checkedCount) => {
        // user3의 todoCount를 업데이트
        const updatedUserList = userList.map(user =>
            user.username === "user3" ? { ...user, todoCount: checkedCount } : user
        );

        // 업데이트된 유저 리스트를 다시 정렬
        const sortedList = updatedUserList.sort((a, b) => b.todoCount - a.todoCount);
        const user3Position = sortedList.findIndex(user => user.username === "user3");
        setSortedUserList(sortedList);
        setUser3Index(user3Position);
    };

    useEffect(() => {
        // 초기 정렬 수행
        const sortedList = [...userList].sort((a, b) => b.todoCount - a.todoCount);
        const user3Position = sortedList.findIndex(user => user.username === "user3");
        setSortedUserList(sortedList);
        setUser3Index(user3Position);
    }, [userList]);

    return (
        <TodoMainStyle>
            <TodoDisplay updateTodoCount={updateTodoCount} setIsAnyTodoChecked={setIsAnyTodoChecked} />
            <LeftDiv>
                <Profile>
                    <UserProfile>
                        <User>
                            <UserIcon></UserIcon>
                            <UserName>{userList[2].username}</UserName>
                        </User>
                        <UserLevel>
                            {/*<UserLevelText>14Lv</UserLevelText>*/}
                            {/*<UserLevelProgress></UserLevelProgress>*/}
                            {/*<UserLevelBar></UserLevelBar>*/}
                        </UserLevel>
                    </UserProfile>
                    <UserInfo>
                        <UserProgress>
                            {todoProgress
                                .filter(todo => todo.progress !== null)
                                .map((todo) => (
                                    <UserProgressItem key={todo.id}>
                                        <UserProgressName>{todo.text}</UserProgressName>
                                        <UserProgressBar progress={todo.progress}>{todo.progress}%</UserProgressBar>
                                        <UserProgressBackgroundBar></UserProgressBackgroundBar>
                                    </UserProgressItem>
                                ))}
                        </UserProgress>
                        <UserRank>
                            <UserRankName>현재 랭킹</UserRankName>
                            <UserCurrentRank>{user3Index+1}등</UserCurrentRank>
                        </UserRank>
                    </UserInfo>
                </Profile>
                <HeatMap>
                    <HeatMapTitle>HeatMap</HeatMapTitle>
                    <GridDiv>
                        <HeatMapLabel>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                        </HeatMapLabel>
                        <Grid>
                            {data.map((isColored, index) =>
                                isColored ? (
                                    <ColoredCell key={index} color="#5B51E2" />
                                ) : (
                                    <Cell key={index} />
                                )
                            )}
                        </Grid>
                    </GridDiv>
                </HeatMap>
            </LeftDiv>
        </TodoMainStyle>
    );
};

export default TodoMain;

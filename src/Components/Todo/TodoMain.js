import React from 'react';
import styled from 'styled-components';
import TodoDisplay from "./TodoDisplay";


const TodoMainStyle = styled.div `
        display: flex;
        height: 93vh;
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
    cursor: pointer;
`

const UserIcon = styled.div`
    width: 3vw;
    height: 3vw;
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
    height: 20vh;
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
    height: 20vh;
    width: 12vw;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-top: 1vh;
    cursor: pointer;
`

const UserRankName = styled.div`
    margin: 1vh 1vw 1vh 1vw;
    font-size: 1.5rem;
`

const UserCurrentRank = styled.div`
    margin: 3vh 1vw 1vh 1vw;
    font-size: 2rem;
    text-align: center;
`

const HeatMap = styled.div`
    background-color: white;
    border-radius: 25px;
    height: 30vh;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    
    display: flex;
    flex-direction: column;
`

const HeatMapTitle = styled.div`
    font-size: 1.5rem;
    margin: 5vh 0 0 3vw;
`

const HeatMapLabel = styled.div`
    display: flex;
    margin-top: 3vh;
    width: 600px;
    
    & > span {
        margin-right: 190px;
    }
`

const GridDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(30, 20px); // 전체 30칸, 각 칸 20px
    grid-template-rows: repeat(3, 20px); // 총 3줄
    
`

const Cell = styled.div`
    width: 20px;
    height: 20px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.4);
`

const ColoredCell = styled(Cell)`
    background: ${props => props.color};
`

const TodoMain = ( ) => {

    const todoProgress = [
        { id: 1, text: 'React 공부하기', progress: 36 },
        { id: 2, text: '점심 준비하기', progress: 10 },
        { id: 3, text: '운동하기', progress: null }
    ];

    const userRankInfo = [
        { id: 1, text: 'user1', rank: 328 }
    ]

    const data = new Array(90).fill(false);
    data[12] = true; // 예제 색상 적용
    data[43] = true;
    data[67] = true;

    return(
        <TodoMainStyle>
            <TodoDisplay></TodoDisplay>
            <LeftDiv>
                <Profile>
                    <UserProfile>
                        <User onClick={() => window.location.href = 'http://localhost:3000/signIn'}>
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
                            {/*<GradationDiv></GradationDiv>*/}
                        </UserProgress>
                        <UserRank onClick={() => window.location.href = '/ranking'}>
                            <UserRankName>현재 랭킹</UserRankName>
                            <UserCurrentRank>{userRankInfo[0].rank}등</UserCurrentRank>
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
                            {data.map((isColored, index) => (
                                isColored ? <ColoredCell key={index} color="#4A90E2" /> : <Cell key={index} />
                            ))}
                        </Grid>
                    </GridDiv>

                </HeatMap>
            </LeftDiv>
        </TodoMainStyle>
    )
}

export default TodoMain

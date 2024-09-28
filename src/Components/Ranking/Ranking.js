import styled from 'styled-components';

const RankingPage = styled.div`
    margin-top: 10vh;
`

const RankingTag = styled.div`
    height: 7vh;
    background-color: white;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    border-radius: 25px 25px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-left: 3vw;
    width: 10vw;
`

const RankingContent = styled.div`
    background-color: white;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
`

const RankingInfo = styled.div`
    align-self: center;
    margin-top: 3vh;
`

const RankingItem = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    margin-bottom: 10vh;
`

const UserRank = styled.div`
    display: flex;
    margin-top: 2vh;
    
    & > div {
        background-color: ${props => 
                props.rank === 1 ? 'rgba(91,81,226,0.5)' : 
                props.rank === 2 ? 'rgba(91,81,226,0.3)' :
                props.rank === 3 ? 'rgba(91,81,226,0.1)' : 'transparent'};
    }
`

const Rank = styled.div`
    margin-right: 1vw;
    background-color: dodgerblue;
    padding: 1vw;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    font-weight: bold;
`

const UserName = styled.div`
    padding: 1vw;
    width: 20vw;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    font-weight: bold;
`

const Ranking = () => {

    const userRank = [
        {id:1, user:"user1", rank:1},
        {id:2, user:"user2", rank:2},
        {id:3, user:"user2", rank:3},
        {id:4, user:"user2", rank:4},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:2, user:"user2", rank:2},
        {id:3, user:"user3", rank:3}
    ]

    return(
        <RankingPage>
            <RankingTag>이번 주 랭킹 순위 TOP5</RankingTag>
            <RankingContent>
                <RankingInfo># 랭킹은 일주일마다 갱신됩니다.　　　　　　　　　　　　　　　　</RankingInfo>
                <RankingItem>
                    {userRank.map((rank) => (
                        <UserRank key={rank.id} rank={rank.rank}>
                            <Rank>{rank.rank}</Rank>
                            <UserName>{rank.user}</UserName>
                        </UserRank>
                    ))}
                </RankingItem>
            </RankingContent>
        </RankingPage>
    )
}

export default Ranking

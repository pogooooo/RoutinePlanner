import './App.css';
import TodoMain from "./Components/Todo/TodoMain";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './Components/Sign/SignIn';
import Rankings from './Components/Ranking/Ranking';
import Community from './Components/Community/Community';
import Program from './Components/Program/Program'
import AddProgram from './Components/Program/AddProgram'

function App() {

    const LeftNav = styled.div`
        display: flex;
        align-items: center;
        margin-left: 3vw;
        
        & > .link {
            margin-right: 1vw;
            text-decoration: none;
            color: black;
        }
    `

    const ProjectName = styled.div`
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
    `

    const ColumnHr = styled.div`
        margin: 0 1vw 0 1vw;
        font-weight: bold;
    `

    const Navigation = styled.div`
        height: 60px;
        box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
        background-color: white;
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    `

    const Profile = styled.div`
        display: flex;
        align-items: center;
    `

    const UserIcon = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #5B51E2;
    `

    const UserName = styled.div`
        margin-right: 3vw;
        margin-left: 0.5vw;
        font-size: 1.2rem;
        font-weight: bold;
    `

  return (
      <BrowserRouter>
        <Navigation>
            <LeftNav>
                <ProjectName onClick={() => window.location.href = '/'}>ProjectName</ProjectName>
                <ColumnHr>|</ColumnHr>
                <Link className='link' to="/program">프로그램 참가</Link>
                <Link className='link' to="/ranking">랭킹 보기</Link>
                <Link className='link' to="/community">게시판</Link>
            </LeftNav>
            <Profile>
                <UserIcon></UserIcon>
                <UserName>tempUserName</UserName>
            </Profile>
        </Navigation>
        <Routes>
            <Route path="/" element={<TodoMain />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<TodoMain />} />
            <Route path="/ranking" element={<Rankings />} />
            <Route path="/community" element={<Community />} />
            <Route path="/program" element={<Program />} />
            <Route path="/addProgram" element={<AddProgram />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css';
import TodoMain from "./Components/Todo/TodoMain";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

function App() {

    const Navigation = styled.div`
        height: 60px;
    `

  return (
      <BrowserRouter>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Navigation>
        <Routes>
          <Route path="/" element={<TodoMain />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

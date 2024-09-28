import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const posts = [
  { id: 1, title: '자격증 시험비 지원받는 꿀팁', date: '2024-09-01', writer: 'writer. Hyejeong' },
  { id: 2, title: '두 번째 게시글', date: '2024-09-05', writer: 'writer.Hyejeong' },
  { id: 3, title: '세 번째 게시글', date: '2024-09-10', writer: 'writer.Hyejeong' },
];

const InformationContent = () => {
  return (
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <StyledLink to={`/post/${post.id}`}>
            <PostContent>
              <h2>{post.title}</h2>
              <PostMeta>
                <p>{post.writer}</p>
                <p>{post.date}</p>
              </PostMeta>
            </PostContent>
          </StyledLink>
        </PostItem>
      ))}
    </PostList>
  );
};

export default InformationContent;

// StyledLink 정의
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  p {
    color: black;
    font-size: 14px;
  }
`;

// PostList 스타일 수정 (가운데 정렬)
const PostList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* 리스트 항목을 수직 방향으로 중앙 정렬 */
  margin: 15px 0;
`;

const PostItem = styled.li`
  margin: 10px 0; /* 위아래 간격 조정 */
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s;
  max-width: 600px; /* 최대 너비를 600px로 제한 */
  width: 80%; /* 80% 너비 설정 */
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* PostContent가 상위 너비를 다 사용하도록 설정 */
`;

const PostMeta = styled.div`
  text-align: right;  /* 오른쪽 정렬 */
  color: black;  /* 글씨 색상을 검은색으로 */
  p {
    margin: 0;
    font-size: 14px;
  }
`;

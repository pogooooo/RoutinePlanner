// Todo/UserProfile.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const { db, closeDatabase } = require('./db');  // db.js에서 데이터베이스 모듈 임포트

// 스타일드 컴포넌트 정의
const UserProfileDiv = styled.div`
    background: #ffffff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const UserName = styled.h2`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
`;

const UserProfile = () => {
    const [userName, setUserName] = useState('');

    // 데이터베이스에서 "현정"의 이름을 불러옴
    useEffect(() => {
        db.get("SELECT name FROM users WHERE name = '현정'", [], (err, row) => {
            if (err) {
                console.error("Error fetching user:", err);
                return;
            }
            setUserName(row.name); // 현정의 이름을 상태에 저장
        });

        return () => {
            closeDatabase(); // 컴포넌트가 언마운트될 때 데이터베이스 연결 종료
        };
    }, []);

    return (
        <UserProfileDiv>
            <UserName>{userName}</UserName>
        </UserProfileDiv>
    );
};

export default UserProfile;

import styled from 'styled-components';
import kakaoLoginImage from '../../Assets/kakao_login_medium_narrow.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

const SignInDiv = styled.div`
    background-color: white;
    width: 30vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const LogInButton = styled.button`
    border: none;
    background-image: url(${kakaoLoginImage}); // 이미지를 변수로 사용
    background-size: cover;
    outline: none;
    width: 200px;  // 버튼 크기 설정
    height: 50px;  // 버튼 크기 설정
`

const SignIn = () => {

    const RestApi = '070c652651dd04b7f966123cc83b1d98';
    const redirect_uri = encodeURIComponent('http://localhost:3000'); // URL 인코딩 적용
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${RestApi}&redirect_uri=${redirect_uri}&through_account=true`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const navigate = useNavigate();  // useNavigate 훅 사용

    useEffect(() => {
        const url = new URL(window.location.href);
        const authorizationCode = url.searchParams.get('code');

        if (authorizationCode) {
            navigate('/signIn'); // 콜백 URL로 이동
            console.log('Authorization Code:', authorizationCode);
        }
    }, []);

    return (
        <SignInPage>
            <SignInDiv>
                <LogInButton onClick={handleLogin}></LogInButton>
            </SignInDiv>
        </SignInPage>
    )
}

export default SignIn

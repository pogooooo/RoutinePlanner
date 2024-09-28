import styled from 'styled-components';
import kakaoLoginImage from '../../Assets/kakao_login_medium_narrow.png';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const RestApi = '070c652651dd04bf7966123cc83b1d9d'
    const redirect_uri = 'http%3A%2F%2Flocalhost%3A8080%2Fcallback'
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=070c652651dd04b7f966123cc83b1d98&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&through_account=true`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    const navigate = useNavigate();  // useNavigate 훅 사용

    useEffect(() => {
        // URL에서 인증 코드 추출
        const url = new URL(window.location.href);
        const authorizationCode = url.searchParams.get('code');

        if (authorizationCode) {
            console.log('Authorization Code:', authorizationCode);
            // 여기서 필요한 작업 수행, 예를 들어 서버로 코드를 전송
            navigate('/'); // 홈으로 리다이렉트
        } else {
        }
    }, [navigate]);

    return (
        <SignInPage>
            <SignInDiv>
                <LogInButton onClick={handleLogin}></LogInButton>
            </SignInDiv>
        </SignInPage>
    )
}

export default SignIn

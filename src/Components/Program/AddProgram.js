import styled from 'styled-components';
import {useState} from 'react'

const AddProgramPage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const AddProgramPageTitle = styled.div`
    background-color: white;
    margin-top: 5vh;
    width: 30vw;
    height: 7vh;
    border-radius: 25px;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3vh;
`

const AddProgramInput = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 30vw;
    border-radius: 25px;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const InputTitle1 = styled.div`
    margin-top: 2vh;
    margin-bottom: 2vh;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InputText1 = styled.input`
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0 3vw 0 3vw;
    height: 30px;
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-left: 20px;
`

const InputText2 = styled.input`
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0 3vw 0 3vw;
    height: 90px;
    border-radius: 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-left: 20px;
`

const InputText3 = styled.input`
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    height: 30px;
    margin-left: 3vw;
    width: 12vw;
    border-radius: 25px 0 0 25px;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-left: 20px;
`

const InputText4 = styled.input`
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    height: 30px;
    width: 12vw;
    margin-right: 3vw;
    border-radius: 0 25px 25px 0;
    box-shadow:inset 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding-left: 20px;
`

const DateInput = styled.div`
    display: flex;
`

const SubmitButton = styled.button`
    margin-top: 5vh;
    border: none;
    height: 5vh;
    font-size: 1rem;
    font-weight: bold;
    background-color: #5B51E2;
    border-radius: 0 0 25px 25px;
    color: white;
`

const AddProgram = () => {


    return(
        <AddProgramPage>
            <AddProgramPageTitle>공동의 목표 정하기</AddProgramPageTitle>
            <AddProgramInput>
                <InputTitle1>공동의 목표를 알려주세요.</InputTitle1>
                <InputText1/>
                <InputTitle1>모집 인원을 선택해주세요. (최대 10명)</InputTitle1>
                <InputText1/>
                <InputTitle1>시작 날짜와 마감 날짜를 정해주세요</InputTitle1>
                <DateInput><InputText3 type='date'/><InputText4 type='date'/></DateInput>
                <InputTitle1>목표에 대한 설명을 적어주세요.</InputTitle1>
                <InputText2/>
                <SubmitButton  onClick={() => window.location.href = '/program'}>생성하기</SubmitButton>
            </AddProgramInput>
        </AddProgramPage>
    )
}

export default AddProgram

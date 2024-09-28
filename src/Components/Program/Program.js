import styled from 'styled-components';
import {useState} from "react";


const ProgramPage = styled.div`

`

const ProgramList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15vh;
`

const ProgramItem = styled.div`
    background-color: white;
    width: 30vw;
    margin: 15vh 3vw 0 3vw;
    height: 30vh;
    border-radius: 25px;
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
`

const ProgramHeader = styled.div`
    margin-top: 4vh;
    margin-left: 3vw;
    margin-bottom: 2vh;
    display: flex;
`

const ProgramTitle = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    align-self: center;
    margin-right: 2vw;
`

const ProgramInvolve = styled.div`
    align-self: center;
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
`

const ProgramDesc = styled.div`
    margin-left: 3vw;
    color: rgba(0, 0, 0, 0.5);
    width: 20vw;
    height: 10vh;

`

const ProgramInfo = styled.div`
    margin-left: 3vw;
    display: flex;
`

const ProgramDate = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
`

const ProgramApp = styled.div`
    background-color: rgba(91, 81, 226, 0.5);
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
    font-weight: bold;
    padding: 5px 30px 5px 30px;
    border-radius: 3px;
    margin-left: 3vw;
`

const AddProgram = styled.div`
    background-color: #5B51E2;
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    color: white;
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
`;

const Program = () => {

    const [modal, setModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const openModal = (program) => {
        setSelectedProgram(program);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };
    const programs = [
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명' +
                '설명설명설명설명설명설명설명설명' +
                '설명설명설명설명설명설명설명설명' +
                '설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
        {   title: '정보처리기사 자격증 취득하기',
            description:'설명설명설명설명설명설명설명설명',
            maxPeople: 5,
            currentPeople: 4,
            startDay: '2024.9.28',
            endDay: '2024.10.1',
        },
    ]


    return(
        <ProgramPage>
            <ProgramList>
                {programs.map((program) => (
                    <ProgramItem>
                        <ProgramHeader>
                            <ProgramTitle>{program.title}</ProgramTitle>
                            <ProgramInvolve>{program.currentPeople}/{program.maxPeople}</ProgramInvolve>
                        </ProgramHeader>
                        <ProgramDesc>{program.description}</ProgramDesc>
                        <ProgramInfo>
                            <ProgramDate>{program.startDay} ~ {program.endDay}</ProgramDate>
                            <ProgramApp onClick={() => openModal(program)}>+</ProgramApp>
                        </ProgramInfo>
                    </ProgramItem>
                ))}
            </ProgramList>
            {modal && (
                <ModalContainer onClick={closeModal}>
                    <ModalContent onClick={e => e.stopPropagation()}>
                        <h1>{selectedProgram.title}</h1>
                        <p>{selectedProgram.description}</p>
                        <p>Participants: {selectedProgram.currentPeople} of {selectedProgram.maxPeople}</p>
                        <p>Duration: {selectedProgram.startDay} to {selectedProgram.endDay}</p>
                    </ModalContent>
                </ModalContainer>
            )}
            <AddProgram onClick={() => window.location.href = '/addProgram'}>+</AddProgram>
        </ProgramPage>
    )
}

export default Program

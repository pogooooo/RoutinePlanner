import React, { useState } from 'react';
import styled from 'styled-components';
import CommunityContent from './CommunityContent';  // Community 탭 내용
import InformationContent from './InformationContent';  // Information 탭 내용

const Community = () => {
  // 현재 활성화된 탭을 관리하는 상태
  const [activeTab, setActiveTab] = useState('목표 인증');

  return (
    <CommunityContainer>
      <TabWrapper>
          <TabButton
            active={activeTab === '목표 인증'}
            onClick={() => setActiveTab('목표 인증')}
          >
            목표 인증
          </TabButton>
          <TabButton
            active={activeTab === '정보 공유'}
            onClick={() => setActiveTab('정보 공유')}
          >
            정보 공유
          </TabButton>
      </TabWrapper>

      {/* 선택된 탭에 따라 다른 컴포넌트 렌더링 */}
      <ContentWrapper>
        {activeTab === '목표 인증' && <CommunityContent />}
        {activeTab === '정보 공유' && <InformationContent />}
      </ContentWrapper>
    </CommunityContainer>
  );
};

export default Community;

// 스타일 컴포넌트
const CommunityContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TabWrapper = styled.div`
    display: flex;
    margin-top: 5vh;
    margin-left: 5vw;
`;

const TabButton = styled.div`
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#ffffff' : '#dddddd')};
    color: ${({ active }) => (active ? 'black' : '#777')};
    border: none;
    border-radius: 10px 10px 0 0; /* 곡선 */
    box-shadow: ${({ active }) => (active ? '0 -5px 5px 3px rgba(0, 0, 0, .1)' : 'none')};
    text-align: center;
    width: 10vw;
    height: 3vh;
    margin-left: 3vw;
    &:hover {
    background-color: ${({ active }) => (active ? '#ffffff' : 'rgba(0,0,0,0.05)')};
    }
`;

const ContentWrapper = styled.div`
  background-color: white;
    padding: 20px;
  border-radius: 0 0 10px 10px; /* 하단 곡선 */
    box-shadow: 0 5px 5px 3px rgba(0, 0, 0, .1);
`;

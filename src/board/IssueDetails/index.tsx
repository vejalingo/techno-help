import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Comments from './Comments';
import Dates from './Dates';

export const Content = styled.div`
  display: flex;
  padding: 0 30px 60px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-right: 50px;
`;

const ProjectBoardIssueDetails: React.FC<any> = ({ issue }) => {
  return (
    <Content>
      <Wrapper>
        <Title issue={issue} />
        <Comments />
        <Dates issue={issue} />
      </Wrapper>
    </Content>
  );
};

export default ProjectBoardIssueDetails;

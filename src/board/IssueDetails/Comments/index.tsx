import React from 'react';
import styled from 'styled-components';
import { font } from 'utils/styles';

export const Comments = styled.div`
  padding-top: 40px;
`;

export const Title = styled.div`
  ${font.medium}
  ${font.size(15)}
`;

const IssueDetailsComments = () => (
  <Comments>
    <Title>Comments</Title>
    <div>Some comments...</div>
  </Comments>
);

export default IssueDetailsComments;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Typography, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { font } from 'utils/styles';

export const StyledHeader = styled(Row)`
  margin-top: 6px;
`;

export const StyledBoardName = styled(Typography.Title)`
  ${font.size(24)}
  ${font.medium}
`;

const createIssue = 'Add new';
const boardnameTitle = 'Leads';

const BoardHeader = ({ handleCreateIssue }: { handleCreateIssue: () => void }) => {
  const [boardname, setBoardname] = useState(boardnameTitle);
  return (
    <StyledHeader justify="space-between">
      <StyledBoardName editable={{ onChange: setBoardname }} level={3}>
        {boardname}
      </StyledBoardName>
      <Button type="dashed" icon={<PlusOutlined />} onClick={handleCreateIssue}>
        {createIssue}
      </Button>
    </StyledHeader>
  );
};

export default BoardHeader;

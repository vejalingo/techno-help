import React from 'react';
import { formatDateTime } from 'utils/dateTime';
import styled from 'styled-components';
import { color, font } from 'utils/styles';

export const Dates = styled.div`
  margin-top: 11px;
  padding-top: 13px;
  line-height: 22px;
  border-top: 1px solid ${color.borderLightest};
  color: ${color.textMedium};
  ${font.size(13)}
`;

interface ProjectBoardIssueDetailsDatesProps {
  issue: {
    createdAt: string;
    updatedAt: string;
  };
}

const ProjectBoardIssueDetailsDates: React.FC<ProjectBoardIssueDetailsDatesProps> = ({ issue }) => (
  <Dates>
    <div>Created at {formatDateTime(issue.createdAt)}</div>
    <div>Updated at {formatDateTime(issue.updatedAt)}</div>
  </Dates>
);

export default ProjectBoardIssueDetailsDates;

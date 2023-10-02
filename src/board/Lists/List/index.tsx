import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { intersection } from 'lodash';
import { IssueStatusCopy } from 'constants/issues';
import { issueStatusColors } from 'utils/styles';
import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './styles';

interface ProjectBoardListProps {
  status: string;
  project: {
    issues: Array<{
      id: number;
      title: string;
      userIds: number[];
      updatedAt: string;
      status: string;
      listPosition: number;
    }>;
    users: any[];
  };
  filters: {
    searchTerm: string;
    userIds: number[];
    myOnly: boolean;
    recent: boolean;
  };
  currentUserId?: number | null;
}

const ProjectBoardList: React.FC<ProjectBoardListProps> = ({ status, project, filters }) => {
  const filteredIssues = filterIssues(project.issues, filters);
  const filteredListIssues = getSortedListIssues(filteredIssues, status);
  const allListIssues = getSortedListIssues(project.issues, status);

  return (
    <Droppable droppableId={status} key={status}>
      {(provided: any) => (
        <List $borderColor={issueStatusColors[status]}>
          <Title>
            {`${IssueStatusCopy[status]} `}
            <IssuesCount>{formatIssuesCount(allListIssues, filteredListIssues)}</IssuesCount>
          </Title>
          <Issues {...provided.droppableProps} ref={provided.innerRef}>
            {filteredListIssues.map((issue: any, index) => (
              <Issue key={issue.id} projectUsers={project.users} issue={issue} index={index} />
            ))}
            {provided.placeholder}
          </Issues>
        </List>
      )}
    </Droppable>
  );
};

const filterIssues = (projectIssues: ProjectBoardListProps['project']['issues'], filters: ProjectBoardListProps['filters']) => {
  const { userIds } = filters;
  let issues = projectIssues;

  if (userIds.length > 0) {
    issues = issues.filter((issue) => intersection(issue.userIds, userIds).length > 0);
  }
  return issues;
};

const getSortedListIssues = (issues: ProjectBoardListProps['project']['issues'], status: ProjectBoardListProps['status']) =>
  issues.filter((issue) => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

const formatIssuesCount = (
  allListIssues: ProjectBoardListProps['project']['issues'],
  filteredListIssues: ProjectBoardListProps['project']['issues'],
) => {
  if (allListIssues.length !== filteredListIssues.length) {
    return `${filteredListIssues.length} of ${allListIssues.length}`;
  }
  return allListIssues.length;
};

export default ProjectBoardList;

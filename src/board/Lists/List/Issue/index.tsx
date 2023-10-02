import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Tag, Space } from 'antd';
import { IssueTypeIcon, IssuePriorityIcon } from 'components';
import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar } from './styles';
import { issueStatusColors } from 'utils/styles';

interface BoardListIssueProps {
  projectUsers: Array<{
    id: number;
    name: string;
  }>;
  issue: {
    id: number;
    userIds: number[];
    status: string;
    title: string;
    type: string;
    priority: string;
    tags?: string[];
  };
  index: number;
}

const BoardListIssue: React.FC<BoardListIssueProps> = ({ projectUsers, issue, index }) => {
  const assignees = issue.userIds.map((userId) => projectUsers.find((user) => user.id === userId));

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided: any, snapshot) => {
        const isBeingdragged = snapshot.isDragging && !snapshot.isDropAnimating;

        return (
          <IssueLink
            key={issue?.id}
            to={`issues/${issue.id}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            $borderColor={issueStatusColors[issue.status]}
          >
            <Issue $isBeingdragged={isBeingdragged}>
              <Title>{issue.title}</Title>
              <Space>
                {issue?.tags?.map((tag, index) => (
                  <Tag key={index} bordered={false} color="purple">
                    {tag}
                  </Tag>
                ))}
              </Space>
              <Bottom>
                <div>
                  <IssueTypeIcon type={issue.type} />
                  <IssuePriorityIcon priority={issue.priority} />
                </div>
                <Assignees>
                  {assignees.map((user: any, key: number) => (
                    <AssigneeAvatar key={user?.id} size={24} src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${key}`} />
                  ))}
                </Assignees>
              </Bottom>
            </Issue>
          </IssueLink>
        );
      }}
    </Draggable>
  );
};

export default BoardListIssue;

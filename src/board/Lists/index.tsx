import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { moveItemWithinArray, insertItemIntoArray } from 'utils/javascript';
import { IssueStatus } from 'constants/issues';
import { useProjectContext } from 'context/projectContext';

import List from './List';
import { Lists } from './styles';

interface ProjectBoardListsProps {
  project: any;
  filters: any;
}

const ProjectBoardLists: React.FC<ProjectBoardListsProps> = ({ project, filters }) => {
  const { updateIssue } = useProjectContext();

  const handleIssueDrop = ({ draggableId, destination, source }: any) => {
    debugger;
    if (!isPositionChanged(source, destination)) return;

    const issueId = draggableId;

    const currentFields = project.issues.find(({ id }: any) => id === issueId);

    const updatedIssue: any = {
      ...currentFields,
      status: destination.droppableId,
      listPosition: calculateIssueListPosition(project.issues, destination, source, issueId),
    };

    updateIssue(currentFields.id, updatedIssue);
  };

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <Lists>
        {Object.values(IssueStatus).map((status, idx) => (
          <List key={idx} status={status} project={project} filters={filters} />
        ))}
      </Lists>
    </DragDropContext>
  );
};

const isPositionChanged = (destination: any, source: any) => {
  if (!destination) return false;
  const isSameList = destination.droppableId === source.droppableId;
  const isSamePosition = destination.index === source.index;
  return !isSameList || !isSamePosition;
};

const calculateIssueListPosition = (allIssues: any[], destination: any, source: any, issueId: number) => {
  const { prevIssue, nextIssue }: any = getAfterDropPrevNextIssue(allIssues, destination, source, issueId);

  let position;

  if (!prevIssue && !nextIssue) {
    position = 1;
  } else if (!prevIssue) {
    position = nextIssue.listPosition - 1;
  } else if (!nextIssue) {
    position = prevIssue.listPosition + 1;
  } else {
    position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
  }
  return position;
};

const getAfterDropPrevNextIssue = (allIssues: any[], destination: any, source: any, droppedIssueId: number) => {
  const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);
  const droppedIssue = allIssues.find((issue) => issue.id === droppedIssueId);
  const isSameList = destination.droppableId === source.droppableId;

  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
    : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);

  return {
    prevIssue: afterDropDestinationIssues[destination.index - 1],
    nextIssue: afterDropDestinationIssues[destination.index + 1],
  };
};

const getSortedListIssues = (issues: any[], status: string) =>
  issues.filter((issue) => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

export default ProjectBoardLists;

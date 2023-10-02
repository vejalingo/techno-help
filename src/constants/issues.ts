export const IssueType = {
  TASK: 'task',
  BUG: 'bug',
  STORY: 'story',
};

export const IssueStatus = {
  DRAFTS: 'drafts',
  PLANNED: 'planned',
  DESIGNING: 'designing',
  INDEV: 'indev',
  QA: 'qa',
};

export enum IssuePriority {
  HIGHEST = '5',
  HIGH = '4',
  MEDIUM = '3',
  LOW = '2',
  LOWEST = '1',
}

export const IssueTypeCopy = {
  [IssueType.TASK]: 'Task',
  [IssueType.BUG]: 'Bug',
  [IssueType.STORY]: 'Story',
};

export const IssueStatusCopy = {
  [IssueStatus.DRAFTS]: 'Drafts',
  [IssueStatus.PLANNED]: 'Planned',
  [IssueStatus.DESIGNING]: 'Designing',
  [IssueStatus.INDEV]: 'In Dev',
  [IssueStatus.QA]: 'QA',
};

export const IssuePriorityCopy = {
  [IssuePriority.HIGHEST]: 'Highest',
  [IssuePriority.HIGH]: 'High',
  [IssuePriority.MEDIUM]: 'Medium',
  [IssuePriority.LOW]: 'Low',
  [IssuePriority.LOWEST]: 'Lowest',
};

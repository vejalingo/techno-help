import { css } from 'styled-components';
import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';

export const color: any = {
  success: '#0B875B',
  danger: '#E13C3C',
  warning: '#F89C1C',
  secondary: '#F4F5F7',

  textDarkest: '#172b4d',
  textDark: '#42526E',
  textMedium: '#5E6C84',

  backgroundLight: '#ebecf0',
  backgroundLightest: '#F4F5F7',

  borderLightest: '#dfe1e6',
  borderInputFocus: '#4c9aff',
};

export const issueTypeColors = {
  [IssueType.TASK]: '#4FADE6',
  [IssueType.BUG]: '#E44D42',
  [IssueType.STORY]: '#65BA43',
};

export const issuePriorityColors: any = {
  [IssuePriority.HIGHEST]: '#CD1317', 
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A',
};

export const issueStatusColors = {
  [IssueStatus.DRAFTS]: '#355070',
  [IssueStatus.PLANNED]: '#6d597a',
  [IssueStatus.DESIGNING]: '#b56576',
  [IssueStatus.INDEV]: '#e56b6f',
  [IssueStatus.QA]: '#eaac8b'
};

export const issueStatusBackgroundColors = {
  [IssueStatus.DRAFTS]: 'red',
  [IssueStatus.PLANNED]: 'yellow',
  [IssueStatus.DESIGNING]: 'orange',
  [IssueStatus.INDEV]: 'green',
  [IssueStatus.QA]: 'purple',
};

export const font: any = {
  regular: 'font-family: inherit; font-weight: normal;',
  medium: 'font-family: inherit; font-weight: normal;',
  size: (size: number | string) => `font-size: ${size}px;`,
};

export const mixin = {
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
};

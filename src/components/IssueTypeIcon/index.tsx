import React from 'react';
import { TypeIcon } from './styles';
import { CheckSquareFilled, BookFilled, BugFilled } from '@ant-design/icons';
import { issueTypeColors } from 'utils/styles';

const IssueTypeIcon = ({ type }: { type: string }) => {
  const CheckSquareFilledColored = () => <CheckSquareFilled style={{ color: issueTypeColors[type] }} />;
  const BookFilledColored = () => <BookFilled style={{ color: issueTypeColors[type] }} />;
  const BugFilledColored = () => <BugFilled style={{ color: issueTypeColors[type] }} />;

  const iconTypes: Record<string, React.FC> = {
    task: CheckSquareFilledColored,
    story: BookFilledColored,
    bug: BugFilledColored,
  };

  return <TypeIcon component={iconTypes[type]} />;
};

export default IssueTypeIcon;

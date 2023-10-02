import React, { Fragment, useRef } from 'react';
import { TitleTextarea } from './styles';

interface ProjectBoardIssueDetailsTitleProps {
  issue: {
    title: string;
  };
}

const ENTER = 13;

const ProjectBoardIssueDetailsTitle: React.FC<ProjectBoardIssueDetailsTitleProps> = ({ issue }) => {
  const $titleInputRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = () => {
    const title = $titleInputRef.current?.value || '';
    if (title === issue.title) return;
  };

  return (
    <Fragment>
      <TitleTextarea
        minRows={1}
        placeholder="Description"
        defaultValue={issue.title}
        ref={$titleInputRef}
        onBlur={handleTitleChange}
        onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
          if (event.keyCode === ENTER) {
            event.currentTarget.blur();
          }
        }}
      />
    </Fragment>
  );
};

export default ProjectBoardIssueDetailsTitle;

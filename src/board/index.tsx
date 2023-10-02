import React, { useState } from 'react';
import { useNavigate, Outlet, useParams, useLocation } from 'react-router-dom';
import useMergeState from 'hooks/mergeState';
import { Modal } from 'antd';
import Header from 'board/Header';
import Filters from 'board/Filters';
import Lists from 'board/Lists';
import IssueDetails from 'board/IssueDetails';
import IssueCreate from './IssueCreate';
import { useProjectContext } from 'context/projectContext';

const defaultFilters = {
  userIds: [],
};

const Board = () => {
  const { project, addIssue } = useProjectContext();

  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(true);

  const [filters, mergeFilters]: any = useMergeState(defaultFilters);

  const isIssueDetailsRoute = location.pathname.endsWith(`/board/issues/${params.issueId}`);
  const isIssueCreateRoute = location.pathname.endsWith(`/board/issues/create`);

  const issue = project.issues.find((issue) => issue.id === params.issueId);

  const handleCancel = () => {
    navigate('/board');
    setIsModalOpen(isIssueDetailsRoute);
  };

  const handleCreateCancel = () => {
    navigate('/board');
    setIsCreateModalOpen(isIssueCreateRoute);
  };

  const onIssueCreate = (values: any) => {
    addIssue({ ...values, id: (project.issues.length + 1).toString() });
    navigate('/board');
  };

  return (
    <>
      <Header handleCreateIssue={() => navigate('issues/create')} />
      <Filters
        title={project.name}
        projectUsers={project.users}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <Lists project={project} filters={filters} />

      <Outlet />

      {isIssueDetailsRoute && (
        <Modal title={`Task-${params.issueId}`} open={isModalOpen} onCancel={handleCancel} footer={null}>
          <IssueDetails issue={issue} projectUsers={project.users} />
        </Modal>
      )}

      {isIssueCreateRoute && (
        <Modal title="Create issue" open={isCreateModalOpen} onCancel={handleCreateCancel} footer={null}>
          <IssueCreate onCreate={onIssueCreate} />
        </Modal>
      )}
    </>
  );
};

export default Board;

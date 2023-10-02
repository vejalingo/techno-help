import React from 'react';
import { IssueType, IssuePriority, IssueTypeCopy, IssuePriorityCopy } from 'constants/issues';
import { Actions, ActionButton } from './styles';
import { Formik } from 'formik';
import { Input, Select, Space } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

interface ProjectIssueCreateProps {
  onCreate: (args: any) => void;
}

const ProjectIssueCreate: React.FC<ProjectIssueCreateProps> = ({ onCreate }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        type: '',
        title: '',
        priority: '',
        status: 'drafts',
        listPosition: 1,
        createdAt: moment(),
        updatedAt: moment(),
        userIds: [621022],
        tags: ['frontend', 'software', 'techno'],
      }}
      onSubmit={async (values) => {
        console.log('values', values);

        onCreate(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Select
              id="type"
              defaultValue="Task"
              style={{ width: '100%' }}
              options={typeOptions}
              onSelect={handleChange}
              onChange={(value) => {
                setFieldValue('type', value);
              }}
              onBlur={handleBlur}
            />
            <TextArea name="title" rows={4} placeholder="Description" onChange={handleChange} onBlur={handleBlur} />
            <Select
              id="priority"
              defaultValue="Low"
              style={{ width: '100%' }}
              options={priorityOptions}
              onSelect={handleChange}
              onChange={(value) => {
                setFieldValue('priority', value);
              }}
              onBlur={handleBlur}
            />
            <Actions>
              <ActionButton type="primary" htmlType="submit">
                Create Issue
              </ActionButton>
            </Actions>
          </Space>
        </form>
      )}
    </Formik>
  );
};

const typeOptions = Object.values(IssueType).map((type) => ({
  value: type,
  label: IssueTypeCopy[type],
}));

const priorityOptions = Object.values(IssuePriority).map((priority) => ({
  value: priority,
  label: IssuePriorityCopy[priority],
}));

export default ProjectIssueCreate;

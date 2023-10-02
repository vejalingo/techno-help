import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { projectData } from './data';

interface Issue {
  id: string;
  title: string;
  type: string;
  status: string;
  priority: string;
  listPosition: number;
  createdAt: string;
  updatedAt: string;
  userIds: string[];
  tags?: string[];
}

interface Project {
  id: string;
  name: string;
  users: User[];
  issues: Issue[];
}

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  projectId: string;
}

interface State {
  project: Project;
}

type Action = { type: 'ADD_ISSUE'; payload: Issue } | { type: 'UPDATE_ISSUE'; payload: { id: string; updatedIssue: Issue } };

type Dispatch = (action: Action) => void;

interface ContextValue {
  project: Project;
  addIssue: (newIssue: Issue) => void;
  updateIssue: (id: string, updatedIssue: Issue) => void;
}

const ProjectContext = createContext<ContextValue | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

const initialState: State = {
  project: projectData,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ISSUE':
      return {
        ...state,
        project: {
          ...state.project,
          issues: [...state.project.issues, action.payload],
        },
      };
    case 'UPDATE_ISSUE':
      // Update an existing issue in the project
      const updatedIssues = state.project.issues.map((issue) => (issue.id === action.payload.id ? action.payload.updatedIssue : issue));
      return {
        ...state,
        project: {
          ...state.project,
          issues: updatedIssues,
        },
      };
    default:
      return state;
  }
};

export const ProjectProvider = ({ children }: ProjectProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addIssue = (newIssue: Issue): void => {
    dispatch({ type: 'ADD_ISSUE', payload: newIssue });
  };

  const updateIssue = (id: string, updatedIssue: Issue): void => {
    dispatch({ type: 'UPDATE_ISSUE', payload: { id, updatedIssue } });
  };

  return <ProjectContext.Provider value={{ project: state.project, addIssue, updateIssue }}>{children}</ProjectContext.Provider>;
};

export const useProjectContext = (): ContextValue => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

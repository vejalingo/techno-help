import React, { useState } from 'react';
import { xor } from 'lodash';
import styled from 'styled-components';
import { Avatar, Typography } from 'antd';
import { color, font, mixin } from 'utils/styles';

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const Avatars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0 12px 0 2px;
`;

export const StyledAvatar = styled(Avatar)`
  border-color: #41a0b6 !important;
`;

export const AvatarIsActiveBorder = styled.div<{ $isActive?: boolean }>`
  ${(props) => props.$isActive && `box-shadow: 0 0 0 2px #29bd9e !important`};
  display: inline-flex;
  margin-left: -2px;
  border-radius: 50%;
  transition: transform 0.1s;
  ${mixin.clickable};
  &:hover {
    transform: translateY(-5px);
  }
`;

export const StyledTitle = styled(Typography.Text)`
  margin-right: 10px;
`;

export const ClearAll = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  padding-left: 12px;
  border-left: 1px solid ${color.borderLightest};
  color: ${color.textDark};
  ${font.size(14.5)}
  ${mixin.clickable}
  &:hover {
    color: ${color.textMedium};
  }
`;

interface IFilters {
  userIds: string[];
}

interface IUsers {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  projectId: string;
}

interface IBoardFilters {
  title: string;
  projectUsers: IUsers[];
  defaultFilters: IFilters;
  filters: IFilters;
  mergeFilters: ({ userIds }: { userIds: string[] }) => void;
}

const BoardFilters = ({ title: t, projectUsers, defaultFilters, filters, mergeFilters }: IBoardFilters) => {
  const [title, setTitle] = useState(t);
  const { userIds } = filters;

  return (
    <Filters data-testid="board-filters">
      <StyledTitle editable={{ onChange: setTitle }}>{title}</StyledTitle>
      <Avatars>
        {projectUsers.map((user, key) => (
          <AvatarIsActiveBorder key={user.id} $isActive={userIds.includes(user.id)}>
            <Avatar.Group maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              <StyledAvatar
                src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${key}`}
                onClick={() => mergeFilters({ userIds: xor(userIds, [user.id]) })}
              />
            </Avatar.Group>
          </AvatarIsActiveBorder>
        ))}
      </Avatars>
      {userIds.length !== 0 && <ClearAll onClick={() => mergeFilters(defaultFilters)}>Clear</ClearAll>}
    </Filters>
  );
};

export default BoardFilters;

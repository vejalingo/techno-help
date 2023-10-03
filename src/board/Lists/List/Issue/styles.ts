import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from 'antd';
import { color, font, mixin } from 'utils/styles';

export const IssueLink = styled(Link)<{$borderColor: string, $isBeingdragged: boolean}>`
  border-top: 4px solid ${(props) => props.$borderColor};
  display: block;
  margin-bottom: 5px;
  text-decoration: none;

  ${(props) =>
    props.$isBeingdragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${mixin.clickable}
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const Title = styled(Typography)`
  padding-bottom: 11px;
  ${font.size(15)}
  @media (max-width: 1100px) {
    ${font.size(14.5)}
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

export const Assignees = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-left: 2px;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #41a0b6;
`;

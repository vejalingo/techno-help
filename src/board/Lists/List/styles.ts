import styled from 'styled-components';

import { color, font, mixin } from 'utils/styles';
import { Typography } from 'antd';

export const List = styled.div<{$borderColor: string}>`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  width: 25%;
  border-radius: 3px;
  background: ${color.backgroundLightest};
  border-top: 4px solid ${(props) => props.$borderColor};
`;

export const Title = styled(Typography)`
  padding: 13px 10px 17px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)};
  ${mixin.truncateText}
`;

export const IssuesCount = styled.span`
  text-transform: lowercase;
  color: ${color.textDarkest};
  ${font.size(13)};
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;

import styled from 'styled-components';

import { color, font } from 'utils/styles';
import { Textarea } from 'components';

export const TitleTextarea = styled(Textarea)`
  margin: 18px 0 0 -8px;
  height: 44px;
  width: 100%;
  textarea {
    padding: 7px 7px 8px;
    line-height: 1.28;
    border: none;
    resize: none;
    background: #fff;
    border: 1px solid transparent;
    box-shadow: 0 0 0 1px transparent;
    transition: background 0.1s;
    ${font.size(24)}
    ${font.medium}
    &:hover:not(:focus) {
      background: ${color.backgroundLight};
    }
  }
`;

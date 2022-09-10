import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { TColorName } from '@typings/common';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
`;

const ListItem = styled.li<{ active?: boolean; color: TColorName }>`
  margin: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.themeColors.lineColor};
  color: ${({ active, color, theme }) =>
    active ? theme.basicColors[color] : theme.themeColors.textColor};
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: 200ms;

  &:hover {
    background-color: ${({ color, theme }) => theme.basicColors[color]};
    color: ${({ theme }) => theme.themeColors.textColor_2};
    border-color: ${({ color, theme }) => theme.basicColors[color]};
  }

  ${({ active, color, theme }) =>
    active &&
    css`
      background-color: ${theme.basicColors[color]};
      color: ${theme.themeColors.textColor_2};
      border-color: ${theme.basicColors[color]};
    `}
`;

export default { List, ListItem };

import styled from '@emotion/styled';
import type { TColorName } from '@typings/common';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 16px;
`;

export const ListItem = styled.li<{ active?: boolean; color: TColorName }>`
  margin: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.themeColors.lineColor};
  color: ${({ theme }) => theme.themeColors.textColor};
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  cursor: pointer;
`;

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
  border-radius: 8px;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  padding: 6px 12px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ active, color, theme }) => theme.colors[active ? color : 'gray']};
  cursor: pointer;
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 24px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 180px);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.themeColors.lineColor};
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.themeColors.lineColor};
  }
`;

export const Name = styled.span`
  padding-left: 12px;
  color: ${({ theme }) => theme.themeColors.textColor};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: bold;
`;

export const Index = styled.span`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.themeColors.textColor};
`;

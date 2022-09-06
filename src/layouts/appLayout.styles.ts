import styled from '@emotion/styled';

export const AppContainer = styled.div`
  padding: 12px 18px;
  overflow: hidden;
`;

export const AppTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: #d34f49;
  font-weight: bold;
`;

export const AppDesc = styled.small`
  color: #6b7280;
  padding: 0;
  margin: 16px 0 0 0;
  display: block;
`;

export const AppImageWrapper = styled.div`
  position: fixed;
  width: 288px;
  height: 288px;
  top: 0;
  right: 0;
  opacity: 0.4;
  transform: translate(96px, -96px);
`;

export const AppImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

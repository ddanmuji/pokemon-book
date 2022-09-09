import styled from '@emotion/styled';
import type { TColorName } from '@typings/common';
import type { TPokemonTypeName } from '@typings/pokemon';

export const Container = styled.div<{ color: TColorName }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color, theme }) => theme.colors[color]};
  padding: 20px;
  border-radius: 0 0 20% 20%;
`;

export const ThumbnailImageWrapper = styled.div`
  width: 160px;
  margin-inline: auto;
  margin-block: 24px;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Index = styled.div`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  opacity: 0.75;
`;

export const TypeWrapper = styled.div<{ color: TPokemonTypeName }>`
  background-color: ${({ color, theme }) => theme.typeColors[color]};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TypeList = styled.div`
  display: flex;
  margin-top: 8px;
  ${TypeWrapper} + ${TypeWrapper} {
    margin-left: 8px;
  }
`;

export const TypeInfo = styled.img`
  height: 12px;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 288px;
  height: 288px;
  left: -96px;
  top: -96px;
  opacity: 0.75;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

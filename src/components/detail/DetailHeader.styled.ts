import styled from '@emotion/styled';
import type { TColorName, TTypeColorName } from '@typings/common';

const Container = styled.div<{ color?: TColorName }>`
  width: 100%;
  height: 300px;
  background-color: ${({ color, theme }) => theme.basicColors[color || 'gray']};
  border-radius: 0 0 15% 15%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.themeColors.textColor_2};
  text-transform: capitalize;
  font-weight: bold;
`;

const Index = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  color: ${({ theme }) => theme.themeColors.textColor_2};
  opacity: 0.7;
  font-weight: bold;
`;

const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TypeItem = styled.div<{ color: TTypeColorName }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color, theme }) => theme.typeColors[color]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const TypeIcon = styled.img`
  width: 80%;
  padding: 2px;
`;

const PokemonImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PokemonImage = styled.img`
  width: 160px;
`;

export default {
  Container,
  TopWrapper,
  Name,
  Index,
  TypeWrapper,
  TypeItem,
  TypeIcon,
  PokemonImageWrapper,
  PokemonImage,
};

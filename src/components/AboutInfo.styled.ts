import styled from '@emotion/styled';
import type { TColorName, TTypeColorName } from '@typings/common';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;

const FlavorText = styled.span`
  color: ${({ theme }) => theme.themeColors.textColor};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const TypeList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TypeWrapper = styled.div<{ type: TTypeColorName }>`
  background-color: ${({ type, theme }) => theme.typeColors[type]};
  padding: 4px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const TypeIcon = styled.img`
  width: 12px;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
`;

const Title = styled.h4<{ color: TColorName }>`
  font-size: ${({ theme }) => theme.fontSizes.h4};
  color: ${({ color, theme }) => theme.basicColors[color]};
  font-weight: 600;
`;

const PokeDataGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;
`;

const PokeDataItem = styled.div`
  width: 100%;
  display: flex;
`;

const PokeDataKey = styled.span`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: bold;
  color: ${({ theme }) => theme.themeColors.textColor};
`;

const PokeDataValue = styled.span<{ color: TColorName }>`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ color, theme }) => theme.basicColors[color]};
`;

const AbilitysWrapper = styled.div``;

export default {
  Container,
  TopWrapper,
  FlavorText,
  TypeList,
  TypeWrapper,
  TypeIcon,
  DataWrapper,
  Title,
  PokeDataGrid,
  PokeDataItem,
  PokeDataKey,
  PokeDataValue,
  AbilitysWrapper,
};

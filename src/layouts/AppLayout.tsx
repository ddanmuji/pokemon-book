import { FC, ReactNode } from 'react';
import S from './AppLayout.styled';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <S.Container>
    <S.Title>Pokédex</S.Title>
    <S.Desc>The Pokédex contains detailed stats for every creature from the Pokémon games.</S.Desc>
    {children}
    <S.ImageWrapper>
      <S.Image src="/svg/pocketball.svg" />
    </S.ImageWrapper>
  </S.Container>
);

export default AppLayout;

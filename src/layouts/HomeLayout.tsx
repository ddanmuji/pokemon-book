import { FC, ReactNode } from 'react';
import S from './HomeLayout.styled';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => (
  <S.Container>
    <S.Title>Pokédex</S.Title>
    <S.Desc>The Pokédex contains detailed stats for every creature from the Pokémon games.</S.Desc>
    {children}
    <S.ImageWrapper>
      <S.Image src="/svg/pocketball.svg" />
    </S.ImageWrapper>
  </S.Container>
);

export default HomeLayout;

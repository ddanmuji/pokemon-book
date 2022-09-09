import { FC, ReactNode } from 'react';
import * as styles from './appLayout.styles';

const { Container, Desc, Image, ImageWrapper, Title } = styles;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <Container>
    <Title>Pokédex</Title>
    <Desc>The Pokédex contains detailed stats for every creature from the Pokémon games.</Desc>
    {children}
    <ImageWrapper>
      <Image src="/svg/pocketball.svg" />
    </ImageWrapper>
  </Container>
);

export default AppLayout;

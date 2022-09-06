import { FC, ReactNode } from 'react';
import * as styles from './appLayout.styles';

const { AppContainer, AppDesc, AppImage, AppImageWrapper, AppTitle } = styles;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <AppContainer>
    <AppTitle>Pokédex</AppTitle>
    <AppDesc>
      The Pokédex contains detailed stats for every creature from the Pokémon games.
    </AppDesc>
    {children}
    <AppImageWrapper>
      <AppImage src="/svg/pocketball.svg" />
    </AppImageWrapper>
  </AppContainer>
);

export default AppLayout;

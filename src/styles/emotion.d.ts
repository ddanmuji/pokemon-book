import '@emotion/react';
import { theme } from './theme';

const { basicColors, fontSizes, themeColors, typeColors } = theme;

declare module '@emotion/react' {
  export interface Theme {
    basicColors: typeof basicColors;
    fontSizes: typeof fontSizes;
    themeColors: typeof themeColors;
    typeColors: typeof typeColors;
  }
}

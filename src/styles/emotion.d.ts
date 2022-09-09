import '@emotion/react';
import { theme } from './theme';

const { colors, fontSizes, typeColors } = theme;

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: typeof fontSizes;
    colors: typeof colors;
    typeColors: typeof typeColors;
  }
}

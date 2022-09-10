const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xm: calcRem(12),
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
} as const;

const themeColors = {
  textColor: '#333333',
  descColor: '#D1D5DB',
  lineColor: '#CECECE',
} as const;

const basicColors = {
  black: '#1F2937',
  gray: '#6B7280',
  red: '#EF4444',
  green: '#10B981',
  blue: '#3B82F6',
  yellow: '#F59E0B',
  brown: '#92400E',
  purple: '#8B5CF6',
  pink: '#EC4899',
} as const;

const typeColors = {
  bug: '#92BC2C',
  dark: '#595761',
  dragon: '#0C69C8',
  electric: '#F2D94E',
  fire: '#FBA54C',
  fairy: '#EE90E6',
  fighting: '#D3425F',
  flying: '#A1BBEC',
  ghost: '#5F6DBC',
  grass: 'rgba(5, 150, 105, 1)',
  ground: '#DA7C4D',
  ice: '#75D0C1',
  normal: '#A0A29F',
  poison: '#B763CF',
  psychic: '#FA8581',
  rock: '#C9BB8A',
  steel: '#5695A3',
  water: '#539DDF',
} as const;

export const theme = {
  fontSizes,
  themeColors,
  basicColors,
  typeColors,
};

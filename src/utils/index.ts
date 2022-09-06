export const getImageUrl = (pokemonIndex: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

export const formatNumbering = (index: number): string => `#${String(index).padStart(3, '0')}`;

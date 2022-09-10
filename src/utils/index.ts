export const getPokemonImageUrl = (pokemonIndex: string | number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

export const getPokemonDetailImageUrl = (id: string | number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export const formatNumbering = (index: string | number): string =>
  `#${String(index).padStart(3, '0')}`;

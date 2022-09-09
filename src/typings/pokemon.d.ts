import { TypeColorType } from '@styles/theme';

export type TPokemonTypeName =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fire'
  | 'fairy'
  | 'fighting'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type ISimplePokemonInfo = {
  name: TPokemonTypeName;
  url: string;
};

export type TPokemonTypeInfo = {
  slot: number;
  type: ISimplePokemonInfo;
};

//* api types
export type TPokemonListResponse = {
  count: number;
  results: SimplePokemonInfo[];
};

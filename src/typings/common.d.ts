export type TColorName =
  | 'black'
  | 'gray'
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'brown'
  | 'purple'
  | 'pink';

export type TTypeColorName =
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

export type TUrlType = {
  url: string;
};

export type TColorInfo = {
  name: TColorName;
} & TUrlType;

export type TInfoTabType = 'about' | 'stats' | 'evolution';

export type TBaseData = {
  name: string;
} & TUrlType;

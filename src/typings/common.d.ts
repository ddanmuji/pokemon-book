export type TColorName =
  | 'black'
  | 'white'
  | 'gray'
  | 'red'
  | 'green'
  | 'blue'
  | 'yellow'
  | 'brown'
  | 'purple'
  | 'pink';

export type TColorInfo = {
  name: TColorName;
  url: string;
};

export type TInfoTabType = 'about' | 'stats' | 'evolution';

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

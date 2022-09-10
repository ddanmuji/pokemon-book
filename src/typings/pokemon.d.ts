import type { TBaseData } from './common';

export type TPokemonAbility = {
  ability: TBaseData;
  is_hidden: boolean;
  slot: number;
};

export type TPokemonSprites = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  other: {
    dream_world: {
      front_default: string;
    };
    'official-artwork': {
      front_default: string;
    };
  };
};

export type TPokemonStat = {
  base_stat: number;
  effort: number;
  stat: TBaseData;
};

export type TPokemonType = {
  slot: number;
  type: TBaseData;
};

//* ajax response types
export type TPokemonListResponse = {
  count: number;
  next: string;
  previous: null;
  results: TBaseData[];
};

export type TPokemonResponse = {
  abilities: Array<TPokemonAbility>;
  base_experience: number;
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: TPokemonSprites;
  stats: TPokemonStat[];
  types: TPokemonType[];
  weight: number;
};

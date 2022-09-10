import type { TBaseData, TColorName, TUrlType } from './common';

export type TSpeciesColor = {
  name: TColorName;
  url: string;
};

export type TFlavorTextEntry = {
  flavor_text: string;
  language: TBaseData;
  version: TBaseData;
};

export type TSpeciesName = {
  language: TBaseData;
  name: string;
};

export type TSpeciesResponse = {
  color: TSpeciesColor;
  evolution_chain: TUrlType;
  flavor_text_entries: TFlavorTextEntry[];
  gender_rate: number;
  growth_rate: TBaseData;
  id: number;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: TSpeciesName[];
  order: number;
};

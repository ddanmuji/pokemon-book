export type TPokemonResult = {
  name: string;
  url: string;
};

export type TPokemonResponse = {
  count: number;
  next: string;
  previous: null;
  results: TPokemonResult[];
};

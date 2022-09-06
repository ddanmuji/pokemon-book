import { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { PokemonService } from '@libs/apis';

const KEY = 'pokemon' as const;
const pokemonService = new PokemonService();

const usePokemon = <T>(data?: string): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(data ? [KEY, data] : KEY, () => pokemonService.getPokemon<T>(data));
};

export default usePokemon;

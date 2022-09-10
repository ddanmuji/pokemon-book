import type { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import QUERY_KEY from '@constants/queryKeys';
import { PokemonService } from '@libs/apis';
import type { TPokemonResponse } from '@typings/pokemon';

const pokemonService = new PokemonService();

/** @returns {TPokemonResponse} 포켓몬 리스트를 가져오는 hook */
const usePokemonQuery = (id?: string): UseQueryResult<AxiosResponse<TPokemonResponse>, Error> =>
  useQuery(id ? [QUERY_KEY.POKEMON, id] : QUERY_KEY.POKEMON, () => pokemonService.getPokemon(id));

export default usePokemonQuery;

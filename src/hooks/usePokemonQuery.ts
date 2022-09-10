import { useQuery, UseQueryResult } from 'react-query';
import type { AxiosResponse } from 'axios';

import QUERY_KEY from '@constants/queryKeys';
import { PokemonService } from '@libs/apis';

const pokemonService = new PokemonService();

/** @returns 포켓몬의 리스트, 정보를 가져오는 hook */
const usePokemonQuery = <T>(id?: string): UseQueryResult<AxiosResponse<T>, Error> =>
  useQuery(id ? [QUERY_KEY.POKEMON, id] : QUERY_KEY.POKEMON, () =>
    pokemonService.getPokemon<T>(id),
  );

export default usePokemonQuery;

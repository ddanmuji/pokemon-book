import { useQuery, UseQueryResult } from 'react-query';
import type { AxiosResponse } from 'axios';

import QUERY_KEY from '@constants/queryKeys';
import { PokemonService } from '@libs/apis';
import type { TSpeciesResponse } from '@typings/species';

const pokemonService = new PokemonService();

/** @return 포켓몬의 종류를 가져오는 hook */
const useSpeciesQuery = (id: string): UseQueryResult<AxiosResponse<TSpeciesResponse>, Error> =>
  useQuery([QUERY_KEY.SPECIES, { id }], () => pokemonService.getSpecies(id));

export default useSpeciesQuery;

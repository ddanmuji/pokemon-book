import type { AxiosPromise } from 'axios';
import { BASE_API, REQUEST_PATH } from '@constants/requestUris';
import type { TSpeciesResponse } from '@typings/index';
import ApiClient from './ApiClient';

class PokemonService extends ApiClient {
  constructor() {
    super(BASE_API);
  }

  /** @return {TPokemonListResponse | TPokemonResponse} 포켓몬의 리스트, 정보를 가져오는 api */
  getPokemon<T>(id?: string): AxiosPromise<T> {
    const requestUrl = id ? `${REQUEST_PATH.POKEMON}/${id}` : REQUEST_PATH.POKEMON;
    return this.instance.get(requestUrl);
  }

  /** @return {TSpeciesResponse} 포켓몬의 종류를 가져오는 api */
  getSpecies(id: string): AxiosPromise<TSpeciesResponse> {
    return this.instance.get(`${REQUEST_PATH.POKEMON_SPECIES}/${id}`);
  }
}

export default PokemonService;

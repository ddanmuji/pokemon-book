import type { AxiosPromise } from 'axios';
import { BASE_API, REQUEST_PATH } from '@constants/requestUris';
import type { TPokemonResponse } from '@typings/index';
import ApiClient from './ApiClient';

class PokemonService extends ApiClient {
  constructor() {
    super(BASE_API);
  }

  /** @return {TPokemonResponse} 포켓몬 리스트 가져오는 api */
  getPokemon(data?: string): AxiosPromise<TPokemonResponse> {
    const requestUrl = data ? `${REQUEST_PATH.POKEMON}/${data}` : REQUEST_PATH.POKEMON;
    return this.instance.get(requestUrl);
  }
}

export default PokemonService;

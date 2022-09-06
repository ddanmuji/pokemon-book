import type { AxiosPromise } from 'axios';
import { BASE_API, REQUEST_PATH } from '@constants/requestUris';
import ApiClient from './ApiClient';

class PokemonService extends ApiClient {
  public constructor() {
    super(BASE_API);
  }

  /** @param {string} data id or name */
  public getPokemon<T>(data?: string): AxiosPromise<T> {
    const requestUrl = data ? `${REQUEST_PATH.POKEMON}/${data}` : REQUEST_PATH.POKEMON;
    return this.instance.get(requestUrl);
  }
}

export default PokemonService;

export const BASE_API = 'https://pokeapi.co/api/v2' as const;

export enum REQUEST_PATH {
  POKEMON = '/pokemon',
  POKEMON_SPECIES = '/pokemon-species',
  ABILITY = '/ability',
  EVOLUTION = '/evolution-chain',
}

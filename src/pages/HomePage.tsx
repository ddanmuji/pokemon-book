import PokemonList from '@components/PokemonList';
import useGetPokemon from '@hooks/useGetPokemon';
import AppLayout from '@layouts/AppLayout';
import type { TPokemonListResponse } from '@typings/pokemon';

const HomePage = () => {
  const {
    isError: isPokemonError,
    isLoading: isPokemonLoading,
    data: PokemonData,
  } = useGetPokemon<TPokemonListResponse>();

  return (
    <AppLayout>
      <PokemonList isError={isPokemonError} isLoading={isPokemonLoading} data={PokemonData} />
    </AppLayout>
  );
};

export default HomePage;

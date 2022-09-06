import PokemonList from '@components/PokemonList';
import usePokemon from '@hooks/usePokemon';
import AppLayout from '@layouts/AppLayout';
import type { PokemonListResponse } from '@typings/pokemon';

const HomePage = () => {
  const {
    isError: isPokemonError,
    isLoading: isPokemonLoading,
    data: PokemonData,
  } = usePokemon<PokemonListResponse>();

  return (
    <AppLayout>
      <PokemonList isError={isPokemonError} isLoading={isPokemonLoading} data={PokemonData} />
    </AppLayout>
  );
};

export default HomePage;

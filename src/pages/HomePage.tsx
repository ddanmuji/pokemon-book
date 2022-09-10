import { useMemo } from 'react';
import PokemonList from '@components/PokemonList';
import usePokemonQuery from '@hooks/usePokemonQuery';
import AppLayout from '@layouts/AppLayout';

const HomePage = () => {
  const pokemonQueryResult = usePokemonQuery();

  const pokemonListProps = useMemo(
    () => ({
      isError: pokemonQueryResult.isError,
      isLoading: pokemonQueryResult.isLoading,
      data: pokemonQueryResult.data,
    }),
    [pokemonQueryResult],
  );

  return (
    <AppLayout>
      <PokemonList {...pokemonListProps} />
    </AppLayout>
  );
};

export default HomePage;

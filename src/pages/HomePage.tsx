import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import PokemonList from '@components/PokemonList';
import usePokemonQuery from '@hooks/usePokemonQuery';
import AppLayout from '@layouts/AppLayout';
import type { TPokemonListResponse } from '@typings/pokemon';

const HomePage = () => {
  const navigate = useNavigate();
  const onMoveToDetailPage = useCallback(
    (idx: number) => () => navigate(`/detail/${idx}`),
    [navigate],
  );

  const { isLoading, isError, data } = usePokemonQuery<TPokemonListResponse>();
  const pokemonListProps = useMemo(
    () => ({ isLoading, isError, data, onMoveToDetailPage }),
    [data, isError, isLoading, onMoveToDetailPage],
  );

  return (
    <AppLayout>
      <PokemonList {...pokemonListProps} />
    </AppLayout>
  );
};

export default HomePage;

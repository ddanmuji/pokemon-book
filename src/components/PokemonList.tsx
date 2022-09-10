import { FC } from 'react';
import type { AxiosResponse } from 'axios';

import { formatNumbering, getPokemonImageUrl } from '@utils/index';
import type { TPokemonListResponse } from '@typings/pokemon';
import * as styles from './pokemonList.styles';

const { Container, Index, Item, List, LoadingWrapper, Name } = styles;

interface PokemonListProps {
  isError: boolean;
  isLoading: boolean;
  onMoveToDetailPage: (idx: number) => () => void;
  data?: AxiosResponse<TPokemonListResponse>;
}

const PokemonList: FC<PokemonListProps> = ({ isError, isLoading, onMoveToDetailPage, data }) => (
  <Container>
    {isLoading || isError ? (
      <LoadingWrapper>
        <img src="/images/loading.gif" alt="loading..." />
      </LoadingWrapper>
    ) : (
      <List>
        {data?.data.results.map(({ name }, idx) => (
          <Item key={name} onClick={onMoveToDetailPage(idx + 1)}>
            <img src={getPokemonImageUrl(idx + 1)} />
            <Name>{name}</Name>
            <Index>{formatNumbering(idx + 1)}</Index>
          </Item>
        ))}
      </List>
    )}
  </Container>
);

export default PokemonList;

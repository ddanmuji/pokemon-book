import type { FC } from 'react';
import type { AxiosResponse } from 'axios';

import { formatNumbering, getImageUrl } from '@utils/index';
import type { PokemonListResponse } from '@typings/pokemon';
import * as styles from './pokemonList.styles';

const { Container, Index, Item, List, LoadingWrapper, Name } = styles;

interface PokemonListProps {
  isError: boolean;
  isLoading: boolean;
  data?: AxiosResponse<PokemonListResponse>;
}

const PokemonList: FC<PokemonListProps> = ({ isError, isLoading, data }) => (
  <Container>
    {isLoading || isError ? (
      <LoadingWrapper>
        <img src="/images/loading.gif" alt="loading..." />
      </LoadingWrapper>
    ) : (
      <List>
        {data?.data.results.map(({ name }, idx) => (
          <Item key={name}>
            <img src={getImageUrl(idx + 1)} />
            <Name>{name}</Name>
            <Index>{formatNumbering(idx + 1)}</Index>
          </Item>
        ))}
      </List>
    )}
  </Container>
);

export default PokemonList;

import { FC, useState } from 'react';
import type { AxiosResponse } from 'axios';

import { formatNumbering, getPokemonImageUrl } from '@utils/index';
import type { TPokemonListResponse } from '@typings/pokemon';
import S from './PokemonList.styled';

interface PokemonListProps {
  isError: boolean;
  isLoading: boolean;
  onMoveToDetailPage: (idx: number) => () => void;
  data?: AxiosResponse<TPokemonListResponse>;
}

const PokemonList: FC<PokemonListProps> = ({ isError, isLoading, onMoveToDetailPage, data }) => {
  const [imgLoading, setImgLoading] = useState(true);
  const onLoad = () => setImgLoading(false);

  console.log(imgLoading);

  return (
    <S.Container>
      {isLoading || isError ? (
        <S.LoadingWrapper>
          <img src="/images/loading.gif" alt="loading..." />
        </S.LoadingWrapper>
      ) : (
        <S.List>
          {data?.data.results.map(({ name }, idx) => (
            <S.Item key={name} onClick={onMoveToDetailPage(idx + 1)}>
              <S.Image src={getPokemonImageUrl(idx + 1)} alt="pokemon" onLoad={onLoad} />
              {imgLoading && <S.Image src="/images/loading.gif" alt="loading..." />}
              <S.Name>{name}</S.Name>
              <S.Index>{formatNumbering(idx + 1)}</S.Index>
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Container>
  );
};

export default PokemonList;

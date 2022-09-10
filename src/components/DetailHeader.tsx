import { FC } from 'react';

import { formatNumbering, getPokemonDetailImageUrl } from '@utils/index';
import type { TPokemonType, TSpeciesColor } from '@typings/index';
import S from './DetailHeader.styled';

interface DetailHeaderProps {
  id: string;
  color?: TSpeciesColor;
  name?: string;
  types?: TPokemonType[];
}

const DetailHeader: FC<DetailHeaderProps> = ({ id, color, name, types }) => (
  <S.Container color={color?.name || 'gray'}>
    <S.TopWrapper>
      <S.Name>{name}</S.Name>
      <S.Index>{formatNumbering(id)}</S.Index>
    </S.TopWrapper>
    <S.TypeWrapper>
      {types?.map(({ type }, idx) => (
        <S.TypeItem key={idx} color={type.name}>
          <S.TypeIcon src={`/svg/${type.name}.svg`} />
        </S.TypeItem>
      ))}
    </S.TypeWrapper>
    <S.PokemonImageWrapper>
      <S.PokemonImage src={getPokemonDetailImageUrl(id)} alt="image" />
    </S.PokemonImageWrapper>
  </S.Container>
);

export default DetailHeader;
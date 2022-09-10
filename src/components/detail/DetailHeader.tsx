import { FC } from 'react';

import { formatNumbering } from '@utils/index';
import type { TPokemonType, TSpeciesColor } from '@typings/index';
import S from './DetailHeader.styled';

interface DetailHeaderProps {
  id: string;
  color?: TSpeciesColor;
  name?: string;
  types?: TPokemonType[];
}

const DetailHeader: FC<DetailHeaderProps> = ({ id, color, name, types }) => {
  return (
    <S.Container>
      {name}
      <br />
      {color?.name}
      <br />
      {types?.map(({ slot, type }, idx) => (
        <div key={idx} style={{ background: '#333' }}>
          <img src={`/svg/${type.name}.svg`} />
        </div>
      ))}
      <br />
      <span>{formatNumbering(id)}</span>
    </S.Container>
  );
};

export default DetailHeader;

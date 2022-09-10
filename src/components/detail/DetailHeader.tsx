import { FC } from 'react';

import type { TPokemonType, TSpeciesColor } from '@typings/index';
import * as styled from './detailHeader.styles';
import { formatNumbering } from '@utils/index';

const { Container } = styled;

interface DetailHeaderProps {
  id: string;
  color?: TSpeciesColor;
  name?: string;
  types?: TPokemonType[];
}

const DetailHeader: FC<DetailHeaderProps> = ({ id, color, name, types }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default DetailHeader;

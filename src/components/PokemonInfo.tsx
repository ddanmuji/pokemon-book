import { FC } from 'react';

import { formatNumbering } from '@utils/index';
import type { TPokemonTypeInfo } from '@typings/pokemon';
import type { TColorInfo } from '@typings/common';
import * as styles from './pokemonInfo.styles';

const {
  Container,
  Image,
  ImageWrapper,
  Index,
  InfoWrapper,
  Name,
  ThumbnailImage,
  ThumbnailImageWrapper,
  TypeInfo,
  TypeList,
  TypeWrapper,
} = styles;

interface PokemonInfoProps {
  id: string;
  name?: string;
  types?: TPokemonTypeInfo[];
  color: TColorInfo;
}

const PokemonInfo: FC<PokemonInfoProps> = ({ id, color, name, types }) => {
  return (
    <Container color={color.name}>
      <ImageWrapper>
        <Image src="/svg/poketball.svg" />
      </ImageWrapper>
      <InfoWrapper>
        <Name>{name}</Name>
        <Index>{formatNumbering(id)}</Index>
      </InfoWrapper>
      <TypeList>
        {types?.map(({ type }, idx) => (
          <TypeWrapper key={idx} color={type.name}>
            <TypeInfo src={`/svg/${type}.svg`} />
          </TypeWrapper>
        ))}
      </TypeList>
      <ThumbnailImageWrapper>
        <ThumbnailImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="image"
        />
      </ThumbnailImageWrapper>
    </Container>
  );
};

export default PokemonInfo;

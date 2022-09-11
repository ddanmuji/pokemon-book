import { FC, useMemo } from 'react';
import type { TSpeciesColor, TPokemonAbility, TPokemonType } from '@typings/index';
import S from './AboutInfo.styled';

interface AboutInfoProps {
  abilities?: TPokemonAbility[];
  baseExp?: number;
  color?: TSpeciesColor;
  flavorText?: string;
  genderRate?: number;
  growthRate?: string;
  height?: number;
  rarity?: string;
  types?: TPokemonType[];
  weight?: number;
}

const AboutInfo: FC<AboutInfoProps> = ({
  abilities,
  baseExp,
  color,
  flavorText,
  genderRate,
  growthRate,
  height,
  rarity,
  types,
  weight,
}) => {
  const pokeDataList = useMemo(
    () => [
      { name: 'Height', data: `${(height as number) / 10}m` },
      { name: 'Weight', data: `${(weight as number) / 10}kg` },
      { name: 'Gender', data: `${(genderRate as number) === -1 ? 'Unknown' : 'Male / Female'}` },
      { name: 'Growth Rate', data: growthRate as string },
      { name: 'Base Exp', data: baseExp as number },
      { name: 'Rarity', data: rarity as string },
    ],
    [baseExp, genderRate, growthRate, height, rarity, weight],
  );

  return (
    <S.Container>
      <S.TopWrapper>
        <S.FlavorText>{flavorText}</S.FlavorText>
        <S.TypeList>
          {types?.map(({ type }) => (
            <S.TypeWrapper key={type.name} type={type.name}>
              <S.TypeIcon src={`/svg/${type.name}.svg`} alt="pokemon_type" />
              {type.name}
            </S.TypeWrapper>
          ))}
        </S.TypeList>
      </S.TopWrapper>
      <S.DataWrapper>
        <S.Title color={(color as TSpeciesColor).name}>포켓몬 데이터</S.Title>
        <S.PokeDataGrid>
          {pokeDataList.map(({ data, name }, idx) => (
            <S.PokeDataItem key={idx}>
              <S.PokeDataKey>{name}</S.PokeDataKey>
              <S.PokeDataValue color={(color as TSpeciesColor).name}>{data}</S.PokeDataValue>
            </S.PokeDataItem>
          ))}
        </S.PokeDataGrid>
      </S.DataWrapper>
      <S.DataWrapper>
        <S.Title color={(color as TSpeciesColor).name}>포켓몬 능력 정보</S.Title>
        {abilities?.map(({ ability }, idx) => (
          <div key={idx}>{`${ability.name} - ${ability.url} `}</div>
        ))}
      </S.DataWrapper>
    </S.Container>
  );
};

export default AboutInfo;

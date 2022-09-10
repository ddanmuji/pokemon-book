import { useCallback, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailHeader from '@components/detail/DetailHeader';
import InfoTabs from '@components/detail/InfoTabs';
import AboutInfo from '@components/detail/AboutInfo';
import StatsInfo from '@components/detail/StatsInfo';
import EvolutionInfo from '@components/detail/EvolutionInfo';
import usePokemonQuery from '@hooks/usePokemonQuery';
import useSpeciesQuery from '@hooks/useSpeciesQuery';
import DetailLayout from '@layouts/DetailLayout';
import type { TInfoTabType } from '@typings/common';
import { TPokemonResponse } from '@typings/pokemon';

const DetailPage = () => {
  const { id } = useParams() as { id: string };

  const [selectedTab, setSelectedTab] = useState<TInfoTabType>('about');
  const onChangeTab = (tab: TInfoTabType) => setSelectedTab(tab);

  const {
    isLoading: isPokemonLoading,
    isError: isPokemonError,
    data: pokemondata,
  } = usePokemonQuery<TPokemonResponse>(id);

  const {
    isLoading: isSpeciesLoading,
    isError: isSpeciesError,
    data: speciesData,
  } = useSpeciesQuery(id);

  console.log(pokemondata);

  const { abilities, baseExp, height, name, stats, types, weight } = useMemo(
    () => ({
      abilities: pokemondata?.data.abilities,
      baseExp: pokemondata?.data.base_experience,
      height: pokemondata?.data.height,
      name: pokemondata?.data.name,
      stats: pokemondata?.data.stats,
      types: pokemondata?.data.types,
      weight: pokemondata?.data.weight,
    }),
    [pokemondata],
  );

  const { color, evolutionChainUrl, flavorText, genderRate, growthRate, isLegendary, isMythical } =
    useMemo(
      () => ({
        color: speciesData?.data.color,
        growthRate: speciesData?.data.growth_rate.name,
        flavorText: speciesData?.data.flavor_text_entries[0].flavor_text,
        genderRate: speciesData?.data.gender_rate,
        isLegendary: speciesData?.data.is_legendary,
        isMythical: speciesData?.data.is_mythical,
        evolutionChainUrl: speciesData?.data.evolution_chain.url,
      }),
      [speciesData],
    );

  const detailComponentData = useMemo(
    () => ({
      about: <AboutInfo />,
      stats: <StatsInfo />,
      evolution: <EvolutionInfo />,
    }),
    [],
  );

  const DetailInfoComponent = useCallback(
    () => detailComponentData[selectedTab],
    [detailComponentData, selectedTab],
  );

  return (
    <DetailLayout>
      <DetailHeader id={id} name={name} types={types} color={color} />
      <InfoTabs tab={selectedTab} onChangeTab={onChangeTab} color={{ name: 'red', url: 'asd' }} />
      <DetailInfoComponent />
    </DetailLayout>
  );
};

export default DetailPage;

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import AboutInfo from '@components/AboutInfo';
import StatsInfo from '@components/StatsInfo';
import EvolutionInfo from '@components/EvolutionInfo';
import DetailHeader from '@components/DetailHeader';
import InfoTabs from '@components/InfoTabs';
import { usePokemonQuery, useSpeciesQuery } from '@hooks/index';
import DetailLayout from '@layouts/DetailLayout';
import type { TInfoTabType, TPokemonResponse } from '@typings/index';

const DetailPage = () => {
  const { id } = useParams() as { id: string };

  const [selectedTab, setSelectedTab] = useState<TInfoTabType>('about');
  const [isLoading, setIsLoading] = useState(true);
  const onChangeTab = (tab: TInfoTabType) => setSelectedTab(tab);

  const { isLoading: isPokemonLoading, data: pokemonResData } =
    usePokemonQuery<TPokemonResponse>(id);
  const { isLoading: isSpeciesLoading, data: speciesResData } = useSpeciesQuery(id);

  useEffect(() => {
    if (isPokemonLoading || isSpeciesLoading) setIsLoading(true);
    else setIsLoading(false);
  }, [isPokemonLoading, isSpeciesLoading]);

  const pokemonData = useMemo(
    () => ({
      abilities: pokemonResData?.data.abilities,
      baseExp: pokemonResData?.data.base_experience,
      height: pokemonResData?.data.height,
      name: pokemonResData?.data.name,
      stats: pokemonResData?.data.stats,
      types: pokemonResData?.data.types,
      weight: pokemonResData?.data.weight,
    }),
    [pokemonResData],
  );

  const speciesData = useMemo(
    () => ({
      color: speciesResData?.data.color,
      growthRate: speciesResData?.data.growth_rate.name,
      flavorText: speciesResData?.data.flavor_text_entries[0].flavor_text,
      genderRate: speciesResData?.data.gender_rate,
      isLegendary: speciesResData?.data.is_legendary,
      isMythical: speciesResData?.data.is_mythical,
      evolutionChainUrl: speciesResData?.data.evolution_chain.url,
    }),
    [speciesResData],
  );

  const aboutProps = useMemo(() => {
    return {
      color: speciesData.color,
      growthRate: speciesData.growthRate,
      flavorText: speciesData.flavorText,
      genderRate: speciesData.genderRate,
      rarity: speciesData.isLegendary
        ? 'Legendary'
        : speciesData.isMythical
        ? 'Mythical'
        : 'Normal',
      types: pokemonData.types,
      weight: pokemonData.weight,
      height: pokemonData.height,
      baseExp: pokemonData.baseExp,
      abilities: pokemonData.abilities,
    };
  }, [speciesData, pokemonData]);

  const detailComponentData = useMemo(
    () => ({
      about: <AboutInfo {...aboutProps} />,
      stats: <StatsInfo />,
      evolution: <EvolutionInfo />,
    }),
    [aboutProps],
  );

  const DetailInfoComponent = useCallback(
    () => detailComponentData[selectedTab],
    [detailComponentData, selectedTab],
  );

  return (
    <DetailLayout isLoading={isLoading}>
      <DetailHeader
        id={id}
        name={pokemonData.name}
        types={pokemonData.types}
        color={speciesData.color}
      />
      <InfoTabs tab={selectedTab} onChangeTab={onChangeTab} color={speciesData.color} />
      <DetailInfoComponent />
    </DetailLayout>
  );
};

export default DetailPage;

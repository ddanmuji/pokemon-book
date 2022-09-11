import { FC } from 'react';
import type { TSpeciesColor, TInfoTabType } from '@typings/index';
import S from './InfoTabs.styled';

const TAB_ITEMS = ['about', 'stats', 'evolution'] as const;

interface InfoTabsProps {
  onChangeTab: (tab: TInfoTabType) => void;
  tab: TInfoTabType;
  color?: TSpeciesColor;
}

const InfoTabs: FC<InfoTabsProps> = ({ onChangeTab, tab, color }) => {
  const onClickTab = (tab: TInfoTabType) => () => onChangeTab(tab);

  return (
    <S.List>
      {TAB_ITEMS.map((item) => (
        <S.ListItem
          key={item}
          onClick={onClickTab(item)}
          active={tab === item}
          color={color?.name || 'gray'}
        >
          {item}
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default InfoTabs;

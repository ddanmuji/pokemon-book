import { FC } from 'react';
import type { TColorInfo, TInfoTabType } from '@typings/common';
import S from './InfoTabs.styled';

const TAB_ITEMS = ['about', 'evolution', 'stats'] as const;

interface InfoTabsProps {
  onChangeTab: (tab: TInfoTabType) => void;
  tab: TInfoTabType;
  color: TColorInfo;
}

const InfoTabs: FC<InfoTabsProps> = ({ onChangeTab, tab, color }) => {
  const onClickTab = (tab: TInfoTabType) => () => onChangeTab(tab);

  return (
    <S.List>
      {TAB_ITEMS.map((item) => (
        <S.ListItem key={item} onClick={onClickTab(item)} active={tab === item} color={color.name}>
          {item}
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default InfoTabs;

import { FC } from 'react';
import type { TColorInfo, TInfoTabType } from '@typings/common';
import * as styles from './infoTabs.styles';

const { List, ListItem } = styles;
const TAB_ITEMS = ['about', 'evolution', 'stats'] as const;

interface InfoTabsProps {
  onChangeTab: (tab: TInfoTabType) => void;
  tab: TInfoTabType;
  color: TColorInfo;
}

const InfoTabs: FC<InfoTabsProps> = ({ onChangeTab, tab, color }) => {
  const onClickTab = (tab: TInfoTabType) => () => onChangeTab(tab);

  return (
    <List>
      {TAB_ITEMS.map((item) => (
        <ListItem key={item} onClick={onClickTab(item)} active={tab === item} color={color.name}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default InfoTabs;

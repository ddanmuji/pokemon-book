import { useState } from 'react';
import { useParams } from 'react-router-dom';

import InfoTabs from '@components/InfoTabs';
import type { TInfoTabType } from '@typings/common';

const DetailPage = () => {
  const { id } = useParams();

  const [selectedTab, setSelectedTab] = useState<TInfoTabType>('about');
  const onChangeTab = (tab: TInfoTabType) => setSelectedTab(tab);

  return (
    <div>
      <InfoTabs tab={selectedTab} onChangeTab={onChangeTab} color={{ name: 'red', url: 'asd' }} />
    </div>
  );
};

export default DetailPage;

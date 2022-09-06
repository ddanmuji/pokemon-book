import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterConfig from '@libs/RouterConfig';
import GlobalStyle from '@styles/GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<span>Loading...</span>}>
        <RouterConfig />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

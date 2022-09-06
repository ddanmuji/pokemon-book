import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import RouterConfig from '@libs/RouterConfig';
import GlobalStyle from '@styles/GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense fallback={<span>Loading...</span>}>
          <RouterConfig />
        </Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
    </QueryClientProvider>
  );
};

export default App;

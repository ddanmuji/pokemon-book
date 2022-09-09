import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import GlobalStyle from '@styles/GlobalStyle';
import { theme } from '@styles/theme';
import RouterConfig from './libs/RouterConfig';

const AppLoading = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Suspense fallback={<AppLoading src="/images/loading.gif" alt="loading..." />}>
            <RouterConfig />
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

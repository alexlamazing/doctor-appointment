'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Toast from './Toast';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      <main>{children}</main>
    </QueryClientProvider>
  );
};

export default Wrapper;

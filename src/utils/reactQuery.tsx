import { QueryClient, QueryClientProvider } from "react-query";

interface ReactQueryI {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function ReactQuery({ children }: ReactQueryI) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

import StateWrapper from "@/components/stateWrapper";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "../../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <StateWrapper>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </StateWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;

import StateWrapper from "@/components/stateWrapper";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'

import "../../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <StateWrapper>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false}/>
        {/* <ReactQueryDevtoolsPanel setIsOpen /> */}
      </StateWrapper>
    </QueryClientProvider>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { Web3Provider } from "@/core/providers/Web3";
import { Layout } from "@/presentation/layout/Layout";

import "@/configs/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Web3Provider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Web3Provider>
    </RecoilRoot>
  );
}

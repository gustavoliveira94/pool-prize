import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "@/presentation/layout/Layout";

import "@/configs/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

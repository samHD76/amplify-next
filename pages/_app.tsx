import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ContextContextProvider } from "@/contexts/ContextContext";
import { contextLocalStorage } from "@/stories/components/navigation-menu/helpers";

Amplify.configure(config);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>
      <ContextContextProvider useContextHook={() => contextLocalStorage}>
        <Component {...pageProps} />
      </ContextContextProvider>
    </>
  );
}

export default withAuthenticator(App);
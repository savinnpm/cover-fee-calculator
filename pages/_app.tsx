import "@fontsource/poppins";
import "@fontsource/sora";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";
import { DataProvider } from "lib/chart/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;

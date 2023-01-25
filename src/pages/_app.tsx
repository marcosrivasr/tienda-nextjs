import { useState } from "react";
import StateWrapper from "@/components/stateWrapper";
import ShoppingCart from "@/components/shoppingCart";
import "../../styles/globals.css";

function MyApp({ Component, pageProps } : any) {
  return (
    <StateWrapper>
      <Component {...pageProps} />
    </StateWrapper>
  );
}

export default MyApp;

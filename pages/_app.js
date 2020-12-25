import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Header from "../components/Header";
import { StylesProvider } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, filter } from "lodash/fp";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SEO from "../next-seo.config";
import { wrapper } from "../store";
import { handlerGetPosts } from "../redux/actions/blog";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="icon" href="/travel-case.svg" />
      </Head>
      <StylesProvider injectFirst>
        <DefaultSeo {...SEO} />
        <Header />

        <Component {...pageProps} />
        {/* <Footer/> */}
      </StylesProvider>
    </>
  );
}

export default wrapper.withRedux(App);

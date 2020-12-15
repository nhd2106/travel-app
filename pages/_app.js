import { DefaultSeo } from "next-seo";

import { Header } from "../components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-owl-carousel2/lib/styles.css";
import { StylesProvider } from "@material-ui/core/styles";
// import SEO from '../next-seo.config';
import { get, filter } from "lodash/fp";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <StylesProvider injectFirst>
        {/* <DefaultSeo {...SEO}/> */}
        <Header />

        <Component {...pageProps} />
        {/* <Footer/> */}
      </StylesProvider>
    </>
  );
}

export default App;

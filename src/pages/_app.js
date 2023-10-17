import Head from "next/head";
import { AuthContextProvider } from "../context/AuthContext";
// import { BrowserRouter } from "react-router-dom";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      {/* <BrowserRouter> */}
      <div>
        <Head>
          <title>RxRoster</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
        </Head>
        <Component {...pageProps} />
      </div>
      {/* </BrowserRouter> */}
    </AuthContextProvider>
  );
}

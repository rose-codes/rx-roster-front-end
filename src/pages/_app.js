import Head from "next/head";
import { AuthContextProvider } from "../context/AuthContext";
import { RxProvider } from "../context/RxContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <RxProvider>
        <div>
          <Head>
            <title>RxRoster</title>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Web site created using create-react-app"
            />
          </Head>
          <Component {...pageProps} />
        </div>
      </RxProvider>
    </AuthContextProvider>
  );
}

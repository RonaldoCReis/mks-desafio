import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Head from 'next/head';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Mks Sistemas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

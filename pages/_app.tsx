import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

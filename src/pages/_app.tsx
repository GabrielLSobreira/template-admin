import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../data/content/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;

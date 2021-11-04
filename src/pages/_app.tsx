import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { AppProvider } from '../data/context/AppContext';
import { AuthProvider } from '../data/context/AuthContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Template Admin</title>
        <meta name="description" content="Template Admin" />
      </Head>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;

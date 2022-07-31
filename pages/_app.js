import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;

import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return ( 
  <>
    <Head>
      <title>Marvels</title>
    </Head>
    <Component {...pageProps} />
  </>
  )
};

export default MyApp;

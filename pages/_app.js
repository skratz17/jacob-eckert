import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
    </>
  );
};

export default App;
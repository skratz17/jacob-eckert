import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
    </Head>
    <Component {...pageProps} />
    </>
  );
};

export default App;
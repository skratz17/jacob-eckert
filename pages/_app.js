import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
      <meta property="og:title" content="Jacob Eckert | Full-Stack Web Developer" />
      <meta property="og:description" content="Personal portfolio website for Nashville-based, full-stack web developer Jacob Eckert."  />
      <meta property="og:image" content="og-image.png" />
    </Head>
    <Component {...pageProps} />
    </>
  );
};

export default App;
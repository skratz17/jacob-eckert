import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
      <meta name="description" content="Jacob Eckert is a full-stack web developer in Nashville, Tennessee, with a skillset including HTML, CSS, JavaScript, React.js, Node.js, Python, Django, and more." />
      <meta name="keywords" content="software,software engineer,software developer,nashville,full-stack,developer,web development,javascript,react,node,html,css,java,python,django" />
      <meta property="og:title" content="Jacob Eckert | Full-Stack Web Developer" />
      <meta property="og:description" content="Personal portfolio website for Nashville-based, full-stack web developer Jacob Eckert."  />
      <meta property="og:image" content="og-image.png" />
    </Head>
    <Component {...pageProps} />
    </>
  );
};

export default App;
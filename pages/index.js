import Head from 'next/head';

import Introduction from '../components/Introduction/Introduction';

const Index = () => {
  return (
    <>
      <Head>
        <title>Jacob Eckert | Full-Stack Web Developer in Nashville, Tennessee</title>
      </Head>
      <Introduction />
    </>
  );
};

export default Index;
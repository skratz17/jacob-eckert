import Head from 'next/head';

import Introduction from '../components/Introduction/Introduction';
import TableOfContents from '../components/TableOfContents/TableOfContents';

const Index = () => {
  return (
    <>
      <Head>
        <title>Jacob Eckert | Full-Stack Web Developer in Nashville, Tennessee</title>
      </Head>

      <main>
        <Introduction />
        <TableOfContents />
      </main>
    </>
  );
};

export default Index;
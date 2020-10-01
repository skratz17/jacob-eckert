import Head from 'next/head';

import Introduction from '../components/Introduction/Introduction';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';

const Index = () => {
  return (
    <>
      <Head>
        <title>Jacob Eckert | Full-Stack Web Developer in Nashville, Tennessee</title>
      </Head>

      <main>
        <Introduction />
        <TableOfContents />
        <AboutMe />
        <Experience />
        <Projects />
      </main>
    </>
  );
};

export default Index;
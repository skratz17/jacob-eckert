import Head from 'next/head';

import Introduction from '../components/Introduction/Introduction';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';

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
        <Technologies />
      </main>
    </>
  );
};

export default Index;
import Head from 'next/head';

import Introduction from '../components/Introduction/Introduction';
import TableOfContents from '../components/TableOfContents/TableOfContents';
import TableOfContentsMenu from '../components/TableOfContents/TableOfContentsMenu/TableOfContentsMenu';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Index = () => {
  const handleNavigation = event => {
    event.preventDefault();
    const element = document.querySelector(event.target.hash);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Head>
        <title>Jacob Eckert | Full-Stack Web Developer in Nashville, Tennessee</title>
      </Head>

      <main id="main">
        <TableOfContentsMenu onNavigate={handleNavigation} />

        <Introduction />
        <TableOfContents onNavigate={handleNavigation} />
        <AboutMe />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Index;
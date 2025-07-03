import { useEffect, useState } from 'react';
import { Nav, Drawer, Hero, Skills, Experience, Projects, Education, Certificates, Contact, Footer, AboutMe } from '../links';

function RootLayout() {
  // State to track dark mode
  const [isDark, setIsDark] = useState(true);
  // Drawer State
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    // Toggle isDark state and update localStorage
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    localStorage.setItem('isDark', JSON.stringify(newIsDark));
  };

  // Function to toggle drawer
  const toggleDrawer = () => {
    const newIsShowDrawer = !isShowDrawer;
    setIsShowDrawer(newIsShowDrawer);

    // Update the body overflow based on the new state
    if (newIsShowDrawer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    // Retrieve isDark value from localStorage
    const storedIsDark = JSON.parse(localStorage.getItem('isDark'));
    if (storedIsDark !== null) {
      setIsDark(storedIsDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run this effect only once on component mount

  return (
    <div className={`${isDark ? 'dark' : ''} ${isShowDrawer ? 'overflow-hidden' : 'overflow-auto'} h-screen dark:bg-darkBlue bg-grayish`}>
      <Drawer isShowDrawer={isShowDrawer} toggleDrawer={toggleDrawer} />
      <div className={`w-full relative dark:bg-darkBlue bg-grayish`}>
        
        <main className={`mx-56 max-[1075px]:mx-10 max-sm:mx-0 max-sm:px-5 py-10`} id='start'>
          <Nav isDark={isDark} toggleDarkMode={toggleDarkMode} toggleDrawer={toggleDrawer} />
          <Hero />
          <AboutMe/>
          <Skills />
          <Experience isDark = {isDark}/>
          <Projects />
          <Education />
          <Certificates isDark = {isDark}/>
          <Contact />
          <Footer isDark = {isDark}/>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
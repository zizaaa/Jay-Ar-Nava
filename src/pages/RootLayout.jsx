import React, { useEffect, useState } from 'react';
import { Nav,Drawer, Hero } from '../links';

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

  //Function to toggle drawer
  const toggleDrawer = () =>{
    setIsShowDrawer(isShowDrawer ? false:true)
  }

  useEffect(() => {
    // Retrieve isDark value from localStorage
    const storedIsDark = JSON.parse(localStorage.getItem('isDark'));
    if (storedIsDark !== null) {
      setIsDark(storedIsDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run this effect only once on component mount

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className='h-screen w-full relative dark:bg-night bg-grayish'>
        <Drawer isShowDrawer = {isShowDrawer} toggleDrawer = {toggleDrawer}/>

        <main className='mx-56 pt-10'>
          <Nav isDark={isDark} toggleDarkMode={toggleDarkMode} toggleDrawer = {toggleDrawer}/>
          <Hero/>
        </main>
      </div>
    </div>
  );
}

export default RootLayout;

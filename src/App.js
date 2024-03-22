import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import SideBar from './components/Sidebar';
import HomePage from './components/Home';
import AboutPage from './components/About';
import PortfolioPage from './components/portfolio';
import ContactPage from './components/Contact';
import React, { useState, useEffect } from 'react';



function App() {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => {
      const show = window.innerWidth < breakpoint
      if (show) {
        setIsMobile(true); // show the full menu
      } else {
        setIsMobile(false); // hide the full menu
      }
    };

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);


  return (
    <div className="App-body">
      {isMobile ? <SideBar /> : <NavBar />}
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
}

export default App;

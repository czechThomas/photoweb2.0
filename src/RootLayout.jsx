import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const arrowUp = {
  position: 'fixed',
  right: '10px',
  bottom: '10px',
  backgroundColor: '#26262615',
  '&:hover': {
    backgroundColor: '#E1B653',
  },
  zIndex: 120,
};

const RootLayout = () => {
  const [showTop, setShowTop] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 100) {
      setShowTop(true)
      } else {
      setShowTop(false)
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => {
      window.removeEventListener('scroll', handleScroll)
      }
  }, []);

  return (
    <>
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.key;
        }}
      />
      <Navbar id="top" />
      <Outlet />
      <Footer />
      <Fab 
        color="primary" 
        aria-label="add" 
        sx={showTop ? arrowUp : { display: 'none' }} 
        onClick={() => {window.scrollTo(0, 0)}}
      >
        <KeyboardDoubleArrowUpIcon />
      </Fab>
    </>
  );
};

export default RootLayout;
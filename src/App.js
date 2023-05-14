import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import HomePage from "./pages/HomePage";
import Portfolio from './pages/Portfolio';
import Gallery from './pages/Gallery';
import Info from './pages/Info';
import PriceList from './pages/PriceList';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import TermsAndConditions from './pages/TermsAndConditions';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Playground from './Playground';

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

export default function App() {
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
      <Navbar id="top" />
      <Routes>
        <Route index path="/" element={<HomePage />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/portfolio/gallery" element={<Gallery />} />
        <Route path="/portfolio/gallery/:id" element={<Gallery />} />
        <Route path="/informace" element={<Info />}/>
        <Route path="/cenik" element={<PriceList />}/>
        <Route path="/kontakt" element={<Contact />}/>
        <Route path="/terms" element={<TermsAndConditions />}/>
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
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


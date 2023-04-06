import { createContext, useContext, useState, useEffect } from 'react';

const WindowContext = createContext();

export const useWindow = () => {
  return useContext(WindowContext);
};

export const WindowProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, []);

  return <WindowContext.Provider value={windowSize}>{children}</WindowContext.Provider>;
};
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

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

    const value = useMemo(() => {
      return {
        windowSize
      };
    }, [windowSize]);

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
};
import { Box, styled } from '@mui/system';
import { useEffect, useMemo, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const HeaderBox = styled(Box)({
  backgroundPosition: 'center',
  backgroundSize: 'cover',  
  position: 'relative',  
});

const WaveBox = styled(Box)({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  overflow: 'hidden',
});

const navigateIcon = {
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  zIndex: '992',
  color: 'white',
  fontSize: '3em',
};

const Header = ({ minHeight }) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const imageData = useMemo(() => [
    "/images/headerPhotoPicture/Uvod_1.jpg",
    "/images/headerPhotoPicture/Uvod_2.jpg",
    "/images/headerPhotoPicture/Uvod_3.jpg",
    "/images/headerPhotoPicture/Uvod_4.jpg",
    "/images/headerPhotoPicture/Uvod_5.jpg",
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      slideNumber + 1 === imageData.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
    }, 15000);
    return () => clearInterval(interval);
  }, [slideNumber, imageData]);

  const prevImage = () => {
    slideNumber === 0 
    ? setSlideNumber(imageData.length -1) 
    : setSlideNumber(slideNumber -1)
  };

  const nextImage = () => {
    slideNumber + 1 === imageData.length
    ? setSlideNumber(0)
    : setSlideNumber(slideNumber + 1)
  };

  return(
    <HeaderBox sx={{ minHeight: minHeight, backgroundImage: `url(${imageData[slideNumber]})` }}>
      <NavigateBeforeIcon sx={{...navigateIcon, left: 0 }} onClick={prevImage} />
      <NavigateNextIcon sx={{...navigateIcon, right: 0 }} onClick={nextImage} />
      <WaveBox>
        <svg 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{ position: 'relative', display: 'block', width: 'calc(191% + 1.3px)', height: '208px' }}
        >
        <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="shape-fill"
            style={{ fill: '#FFFFFF' }}
        />
        </svg>
        </WaveBox>
    </HeaderBox>
  );
};

export default Header;
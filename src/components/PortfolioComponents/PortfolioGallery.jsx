import { Box, Button, styled } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useEffect, useState } from "react";
import './PortfolioGallery.css';
import { useNavigate, useLocation } from "react-router-dom";

const GalleryStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '90%',
  margin: '0 auto',
};

const navigateIcon = {
  cursor: 'pointer',
  position: 'fixed',
  zIndex: '992',
  color: 'white',
  fontSize: '3em',
};

const BackButton = styled(Button)({
  cursor: 'pointer',
  color: 'black',
  margin: '15px',
  border: '1px solid black',
  '&:hover': {
    backgroundColor: 'white',
  },
})

const PortfolioGallery = ({ itemData }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  };

  const prevImage = () => {
    slideNumber === 0 
    ? setSlideNumber(itemData.length -1) 
    : setSlideNumber(slideNumber -1)
  };

  const nextImage = () => {
    slideNumber + 1 === itemData.length
    ? setSlideNumber(0)
    : setSlideNumber(slideNumber + 1)
  };

  return (
    <>
      { openModal &&
        <>
        <div className="sliderWrap" onClick={handleCloseModal}>
          <div className="fullScreenImage">
            <img src={itemData[slideNumber].img} alt={itemData[slideNumber].title}/>
          </div>
        </div>
        <NavigateBeforeIcon sx={navigateIcon} onClick={prevImage} className="prevSlide" />
        <NavigateNextIcon sx={navigateIcon} onClick={nextImage} className="nextSlide" />
        <CloseIcon onClick={handleCloseModal} sx={navigateIcon} className="closeSlide" />
        </>
      }
      <Box sx={GalleryStyle}>
        {
          itemData && itemData.map((slide, index) => {
            return (
              <div 
                className="single" 
                key={index} 
                style={{ cursor: 'pointer' }}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt={slide.title} />
              </div>
            )
          })
        }
      </Box>
      <BackButton onClick={() => navigate(-1)}>ZPĚT</BackButton>
    </>
  )
}

export default PortfolioGallery;


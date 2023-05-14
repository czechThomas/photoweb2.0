import './Gallery.css';
import { Box, Button, styled } from '@mui/material';

const PortfolioButton = styled(Button)({
  marginTop: '20px',
  width: '250px',
});

const GalleryBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    paddingTop: '50px',
 }); 

const Gallery = ({ type }) => {

  const pictureData = {
    svatby: [
      '/images/wedding/8.jpg',
      '/images/wedding/20.jpg',
      '/images/wedding/21.jpg'
    ],
    miminka: [
      '/images/babies/2.jpg',
      '/images/babies/3.jpg',
      '/images/babies/8.jpg',
    ],
    detiarodinky: [
      '/images/kidsAndFamily/2.jpg',
      '/images/kidsAndFamily/3.jpg',
      '/images/kidsAndFamily/4.jpg',
    ],
  };
  
  return (
    <>
      <GalleryBox>
        {
          pictureData[`${type}`].map((value, index) => {
            return <img alt={value} key={index} src={value} className='imageStyle'/>
          })
        }
      </GalleryBox>
      <PortfolioButton variant='contained' href={`/portfolio/gallery/${type}`}>
        Galerie
      </PortfolioButton>
    </>
  )
}

export default Gallery;

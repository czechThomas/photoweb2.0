import './Gallery.css';
import { Box, styled } from '@mui/material';
import { PortfolioButton } from '../../CustomStyles';

const GalleryBox = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
    paddingTop: '50px',
  })  

const Gallery = ({ type }) => {
  const pictureData = {
    svatby: [
      '/images/svatba/DSC_4128-Edit.jpg',
      '/images/svatba/DSC_8717.jpg',
      '/images/svatba/DSC_6444-Edit.jpg'
    ],
    miminka: [
      '/images/babies/DSC_0119_cb.jpg',
      '/images/babies/DSC_0760-Edit.jpg',
      '/images/babies/DSC_0030.jpg',
    ],
    detiarodinky: [
      '/images/kids/DSC_6371.jpg',
      '/images/kids/DSC_8461.jpg',
      '/images/kids/DSC_8773_cb.jpg',
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
        Chci vidět více fotek
      </PortfolioButton>
    </>
  )
}

export default Gallery;

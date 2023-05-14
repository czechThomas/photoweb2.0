import { Box, styled } from '@mui/material';
import PortfolioGallery from '../components/PortfolioComponents/PortfolioGallery';
import{ wedding, babies, kidsAndFamily, pregnant } from '../components/PortfolioComponents/GalleryData';
import { useNavigate, useParams } from 'react-router-dom';

const PortfolioBox = styled(Box)({
    paddingTop: '125px',
    margin: '0 auto',
    textAlign: 'center',
});

const Portfolio = () => {
    const params = useParams();
    const navigate = useNavigate();

    return(
        <>
          <PortfolioBox>
            {(() => {
                switch (params.id) {
                case 'svatby':
                    return <PortfolioGallery itemData={wedding}/>;
                case 'miminka':
                    return <PortfolioGallery itemData={babies}/>;
                case 'detiarodinky':
                    return <PortfolioGallery itemData={kidsAndFamily}/>;
                case 'tehotenske':
                    return <PortfolioGallery itemData={pregnant}/>;
                default:
                    return (
                        <>
                            <Box sx={{ height: '730px' }}>
                                <div style={{ cursor: 'pointer' }} onClick={() => navigate('/portfolio')}>Není vybraná galerie, vyberte si prosím v portfoliu...</div>
                            </Box>
                        </>
                    );
                }
            })()}  
          </PortfolioBox>
        </>
    );
};

export default Portfolio;
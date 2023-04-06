import { Box } from '@mui/material';
import PortfolioGallery from '../components/PortfolioComponents/PortfolioGallery';
import{ svatby, miminka, detiarodinky, tehotenske } from '../components/PortfolioComponents/GalleryData';
import { stylePortfolioBox } from '../CustomStyles';
import { useNavigate, useParams } from 'react-router-dom';

const Portfolio = () => {
    const params = useParams();
    const navigate = useNavigate();

    return(
        <>
          <Box sx={stylePortfolioBox}>
            {(() => {
                switch (params.id) {
                case 'svatby':
                    return <PortfolioGallery itemData={svatby}/>;
                case 'miminka':
                    return <PortfolioGallery itemData={miminka}/>;
                case 'detiarodinky':
                    return <PortfolioGallery itemData={detiarodinky}/>;
                case 'tehotenske':
                    return <PortfolioGallery itemData={tehotenske}/>;
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
          </Box>
        </>
    );
};

export default Portfolio;
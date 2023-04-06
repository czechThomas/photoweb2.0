import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MinorHeader from '../components/Header/MinorHeader';
import GalleryBox from '../components/Information/Gallery';
import ButtonGoup from '../components/Information/ButtonGoup';
import Miminka from '../pages/Miminka';
import Svatby from '../pages/Svatby';
import Deti from '../pages/Deti';
import Rodinky from '../pages/Rodiny';
import { styleBox } from '../CustomStyles';


const Info = ({ windowSize }) => {
  const [searchParams, setSearchParams] = useSearchParams({ type: 'svatby' });
  const type = searchParams.get('type');
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return(
    <>
      <Box sx={styleBox}>
        <MinorHeader minHeight="90px" title="Informace o focení"/>
        <Box>
          Jediná fotografie, které budete litovat je ta, kterou nemáte!       
        </Box>
        <ButtonGoup type={type} setType={setSearchParams} windowSize={windowSize} />
        <GalleryBox type={type} />
        {(() => {
        switch (type) {
          case 'svatby':
            return <Svatby />;
          case 'miminka':
            return <Miminka />;
          case 'deti':
            return <Deti />;
          case 'rodinky':
            return <Rodinky />;
          default:
            return <Svatby />;
        }
      })()}
      </Box>
    </>
  );
};

export default Info;
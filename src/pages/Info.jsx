import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import GalleryBox from '../components/Information/Gallery';
import ButtonGoup from '../components/Information/ButtonGoup';
import Miminka from '../pages/Miminka';
import Svatby from '../pages/Svatby';
import Deti from '../pages/Deti';
import { styleBox } from '../CustomStyles';


const Info = () => {
  const [searchParams, setSearchParams] = useSearchParams({ type: 'svatby' });
  const type = searchParams.get('type');
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return(
    <>
      <Box sx={styleBox}>
        <ButtonGoup type={type} setType={setSearchParams} />
        {(() => {
        switch (type) {
          case 'svatby':
            return <Svatby />;
          case 'miminka':
            return <Miminka />;
          case 'detiarodinky':
            return <Deti />;
          default:
            return <Svatby />;
        }
      })()}
      <GalleryBox type={type} />
      </Box>
    </>
  );
};

export default Info;
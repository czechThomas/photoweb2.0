import { Box, styled } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import GalleryBox from '../components/Information/Gallery';
import ButtonGoup from '../components/Information/ButtonGoup';
import Miminka from '../pages/Miminka';
import Svatby from '../pages/Svatby';
import Deti from '../pages/Deti';

const InfoBox = styled(Box)({
  paddingTop: '125px',
  maxWidth: '90%',
  margin: '0 auto',
  textAlign: 'center',
  minHeight: '55vh',
});


const Info = () => {
  const [searchParams, setSearchParams] = useSearchParams({ type: 'svatby' });
  const type = searchParams.get('type');
  const { search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);

  return(
    <>
      <InfoBox>
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
      </InfoBox>
    </>
  );
};

export default Info;
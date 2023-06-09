import { Box, Button, styled, Typography } from '@mui/material';

const PortfolioButton = styled(Button)({
  marginTop: '20px',
  width: '250px',
});

const PortfolioBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row-reverse',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  padding: '10px 0px 50px',
});

const Box35padding = styled(Box)({
  paddingTop: '35px',
  maxWidth: '90%',
  margin: '0 auto',
  textAlign: 'center',
});

const Svatby = () => {
  return (
    <>
      <Box35padding>
        <PortfolioBox>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/wedding/1.jpg" style={{ width: '100%', height: '500px', objectFit: 'contain' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                  Hledáte svatebního fotografa pro Váš velký den? Ráda se stanu součástí Vašeho dne a zachytím každý okamžik.
                  <br />
                  <br />
                  Ke každému focení přistupuji individuálně, v případě Vašeho zájmu o zaslání cenové nabídky mi prosím napište zprávu společně s termínem a místem konání svatby.
                  <br />
                  <br />
                  Svatební focení začíná na částce 13.900,- 
                </Typography>
            </Box>
        </PortfolioBox>
        <Box>
          <Typography variant='h3'>Důležité informace</Typography>
          <Typography variant='body1' sx={{ paddingTop: '15px' }}>
          Fotografie dodávám vždy do 8 týdnů od svatby. Počet fotografií se liší dle vybraného balíčku.
          <br />
          <br />
          Zaručuji dodání prvních cca 10ks fotografií do týdne od svatby, další fotografie zasílám postupně nahráním do Vaší soukromé online galerie.
          <br />
          <strong>Fotografie vybírám sama a neupravené fotografie neposkytuji, proto je po mě, prosím, ani nežádejte.</strong>
          <br />
          <br />
          V ceně máte vždy předsvatební schůzku, při této příležitosti nabízím předsvatební focení zdarma. Je to ideální možnost ,,vyzkoušet“ si focení a lépe se poznat.
          <br />
          <br />
          <strong>Pro závaznou rezervaci termínu se hradí záloha ve výši 2.000,-</strong>
          <br />
          <br />
          </Typography>
          <PortfolioButton variant='contained' href='/kontakt'>
              Kontakt
          </PortfolioButton>
        </Box>
      </Box35padding>
    </>
  )
}

export default Svatby;

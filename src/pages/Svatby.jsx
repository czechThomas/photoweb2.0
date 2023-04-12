import { Box, Typography } from '@mui/material';
import { PortfolioButton, PortfolioBox, styleBox35padding } from '../CustomStyles';
import MinorHeader from '../components/Header/MinorHeader';

const Svatby = () => {
  return (
    <>
      <Box sx={styleBox35padding}>
        <MinorHeader minHeight="90px" title="Svatební fotografování"/>
        <PortfolioBox sx={{ flexDirection: 'row-reverse', paddingBottom: '50px' }}>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/svatba/183.jpg" style={{ width: '100%', height: '500px', objectFit: 'contain' }}/>
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
                <PortfolioButton variant='contained' href="/kontakt">
                  Chci fotografie
                </PortfolioButton>
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
              Chci fotografie
          </PortfolioButton>
        </Box>
      </Box>
    </>
  )
}

export default Svatby;

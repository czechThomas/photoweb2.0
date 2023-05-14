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


const Deti = () => {
  return (
    <>
      <Box35padding>
        <PortfolioBox>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/kidsAndFamily/1.jpg" style={{ width: '100%', height: '500px', objectFit: 'contain' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                  Focení rodinek a dětí může probíhat v exteriéru nebo ve Vámi vybraném ateliéru v Hradci Králové nebo v Pardubicích.
                  <br />
                  Při venkovním rodinném focení je samozřejmostí i focení s domácími mazlíčky.
                </Typography>
            </Box>
        </PortfolioBox>
        <Box>
          <Typography variant='h3'>Informace o focení dětí</Typography>
          <Typography variant='body1' sx={{ paddingTop: '15px' }}>
            Focení dětí je ideální od věku cca 4 měsíců, kdy už vydrží hezky "pasou" koníčky.
            <br />
            Focení rodinek a dětí může probíhat v exteriéru nebo ve Vámi vybraném ateliéru v Hradci Králové nebo v Pardubicích. 
            <br />
            Při venkovním rodinném focení je samozřejmostí i focení s domácími mazlíčky.
            <br />
            <br />
            <b>Co na sebe, Co s sebou?</b>
            <br />
            <b>Oblečení:</b> Doporučuji bez velkých nápisů, rušivých elementů, log apod. Vhodné je slavnostnější oblečení nebo přírodnější styl.
            <br />
            <br />
            <b>Muži:</b> Košile s dlouhým rukávem, jednobarevné triko, rifle, košile, svetr.
            <br />
            <b>Ženy:</b> Šaty, košile, tunika, svetr, legíny.
            <br />
            <br />
            <b>Dětem vezměte oblíbenou hračku pro upoutání pozornosti a odměnu za focení :-)</b>
            <br />
            <br />
            Maminky a holčičky, nebojte se na focení krásně ,, načančat" uvidíte, že přípravu oceníte. Holčičkám doporučuji natočit vlásky, hezky učesat.
            <br />
            Nezapomeňte na úpravu nehtů, nemusí být umělé, stačí čisté, upravené.. 
            <br />
            <br />
            <b>Doba dodání fotografií</b>
            <br />
            Náhledy zasílám do 10 pracovních dnů.
            <br />
            Náhledy jsou zmenšené, neupravená fotografie, neslouží k dalšímu šíření, stahování apod.
            <br />
            <b>Neupravené fotografie neposkytuji, proto je po mně prosím ani nežádejte.</b>
            <br />
            <br />
            Úprava zahrnuje barvy, retuš pleti, ořez, tónování. Neupravuji tělesné proporce, vrásky, dětské tetovačky, náplasti.
            <br />
            Světlost/tmavost, barevný nádech a fotografický styl není možné reklamovat ani v elektronické, ani tištěné podobě.
            <br />
            <u>Důvodem k reklamaci fotografií není nespokojenost s vlastním vzhledem.</u>
            <br />
            Upravené fotografie posílám do 8 týdnů od doby, kdy mi pošlete svůj výběr k úpravě.
            <br />
            Doba dodání se liší dle aktuální vytíženosti. Fotografie zasílám elektronicky.
          </Typography>
          <PortfolioButton variant='contained' href='/kontakt'>
              Kontakt
          </PortfolioButton>
        </Box>
      </Box35padding>
    </>
  )
}

export default Deti;

import { Box, Typography } from '@mui/material';
import { PortfolioButton, PortfolioBox, styleBox35padding } from '../CustomStyles';
import MinorHeader from '../components/Header/MinorHeader';


const Deti = () => {
  return (
    <>
      <Box sx={styleBox35padding}>
        <MinorHeader minHeight="90px" title="fotografování dětí"/>
        <PortfolioBox sx={{ flexDirection: 'row-reverse', paddingBottom: '50px' }}>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/kids/DSC_6486.jpg" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                  Focení rodinek a dětí může probíhat v exteriéru nebo ve Vámi vybraném ateliéru v Hradci Králové nebo v Pardubicích.
                  <br />
                  Při venkovním rodinném focení je samozřejmostí i focení s domácími mazlíčky.
                </Typography>
                <PortfolioButton variant='contained' href="/kontakt">
                    Chci fotografie
                </PortfolioButton>
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
        </Box>
      </Box>
    </>
  )
}

export default Deti;

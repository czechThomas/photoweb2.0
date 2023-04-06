import { Box, Typography } from '@mui/material';
import { PortfolioButton, PortfolioBox, styleBox35padding } from '../CustomStyles';
import MinorHeader from '../components/Header/MinorHeader';


const Miminka = () => {
  return (
    <>
      <Box sx={styleBox35padding}>
        <MinorHeader minHeight="90px" title="Fotografování miminek"/>
        <PortfolioBox sx={{ flexDirection: 'row-reverse', paddingBottom: '50px' }}>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/babies/DSC_0091.jpg" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                  Na focení miminka se prosím objednávejte již v těhotenství. Tímto předobjednáním si Vás zapíšu a přesný termín doladíme, až bude miminko na světě.
                  <br />
                  Novorozenecké fotky fotím mezi 5. a 14. dnem od narození.
                </Typography>
                <PortfolioButton variant='contained' href='/kontakt'>
                    Chci fotografie
                </PortfolioButton>
            </Box>
        </PortfolioBox>
        <Box>
          <Typography variant='h3'>Podrobnější informace</Typography>
          <Typography variant='body1' sx={{ paddingTop: '15px' }}>
            Focení probíhá z pohodlí Vašeho domova. 
            <br />
            Při objednání mi prosím napište, zda budete mít zájem o stylizované focení, nebo tzv. Lifestyle
            <br />
            <br />
            <b>Lifestylový focení</b> je fotografování bez rekvizit, pouze Vy a miminko.
            <br />
            <b>Stylizované fotografování</b> je aranžování miminka - focení v košíčkách, oblečkách apod.
            <br />
            <br />
            Veškeré potřebné rekvizity dovezu s sebou. Od Vás budu pouze potřebovat pouze vytopenou a světlejší místnost, vytopenou ideálně kolem 26-27stupňů.
            <br />
            <br />
            Doba focení je závislá na miminku, focení budeme maličkému plně přizpůsobovat. Budeme několikrát kojit, přebalovat. Počítejte tedy s delší dobou focení cca 2-3 hodiny.
            <br />
            <br />
            <b>Jak se na focení připravit?</b>
            <br />
            Světlé, formálnější oblečení pro všechny fotografované (kromě miminka). Pro tatínky a bratříčky miminka doporučuji bílou košili s dlouhým rukávem, pro maminky bílou halenku, šaty… Boty nejsou na focení potřeba. Oblečení pro novorozeňátko mám.
            <br />
            Maminky a holčičky, nebojte se na focení krásně ,, načančat" uvidíte, že přípravu oceníte. Holčičkám doporučuji natočit vlásky, hezky učesat. Nezapomeňte na úpravu nehtů, nemusí být umělé, stačí čisté, upravené..
            <br />
            <br />
            Pro miminko: dudlík (focení s ním je o dost snazší, miminko je při dudlání klidnější) a dostatek umělého mlíčka, jestliže nemáte dostatek mateřského.
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
          <PortfolioBox>
              <img alt="jmeno" src="/images/babies/DSC_0803-Edit.jpg" style={{ width: '100%', height: '350px', objectFit: 'cover' }}/>
          </PortfolioBox>
          <PortfolioButton variant='contained' href='/kontakt'>
              Chci fotografie
          </PortfolioButton>
        </Box>
      </Box>
    </>
  )
}

export default Miminka;

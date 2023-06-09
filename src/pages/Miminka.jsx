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


const Miminka = () => {
  return (
    <>
      <Box35padding>
        <PortfolioBox>
            <Box sx={{ width: '500px' }}>
                <img alt="jmeno" src="/images/babies/1.jpg" style={{ width: '100%', height: '340px', objectFit: 'contain' }}/>
            </Box>
            <Box sx={{ width: '500px', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ paddingTop: '15px' }}>
                  Na focení miminka se prosím objednávejte již v těhotenství. Tímto předobjednáním si Vás zapíšu a přesný termín doladíme, až bude miminko na světě.
                  <br />
                  Novorozenecké fotky fotím mezi 5. a 14. dnem od narození.
                </Typography>
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
          <PortfolioButton variant='contained' href='/kontakt'>
              Kontakt
          </PortfolioButton>
        </Box>
      </Box35padding>
    </>
  )
}

export default Miminka;

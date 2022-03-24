import { Box, Toolbar, Typography, Container, Button, Grid } from "@mui/material"
import CardContentNumbers from "../components/CardContentNumbers";
import CardContentRecent from "../components/CardContentRecent";
import CardMain from "../components/CardMain";
import TitleSection from "../components/TitleSection";




export default function Home() {

  const cardsMain = [
    {title: 'Contas a pagar', price: 1020, percent: '8.8%' , status: false},
    {title: 'Contas a receber', price: 550, percent: '5.8%' , status:true},
    {title: 'Despesas fixas', price: 500, percent: '15%' , status:true}
  ]



  return (
    <>
      <Box sx={{ flexGrow: 1, p: 3, marginTop: '3rem'  }}>
        <TitleSection>Dashboard</TitleSection>
      </Box>
      <Grid container spacing={1}>
        {cardsMain.map(card => {
            return (
                <CardMain key={card.title}  minWidth={265} minHeight={136}>  
                  <CardContentNumbers cardTitle={card.title} cardPrice={card.price} cardPercent={card.percent} cardStatus={card.status} />
                </CardMain>
            )
          })}
      </Grid>
      <Grid container spacing={1} sx={{marginTop: '1rem'}}>
          <CardMain minWidth={265} minHeight={232}>
            <CardContentRecent cardTitle='Adicionado recentemente'/>
          </CardMain>
      </Grid>
  </>
  )
}
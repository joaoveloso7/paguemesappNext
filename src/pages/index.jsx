import { Box, Toolbar, Typography, Container, Button } from "@mui/material"
import CardMain from "../components/CardMain";
import TitleSection from "../components/TitleSection";




export default function Home() {

  const cards = [
    {title: 'Contas a pagar', price: 1020, percent: '8.8%' , status:'down'},
    {title: 'Contas a receber', price: 550, percent: '5.8%' , status:'up'},
    {title: 'Despesas fixas', price: 500, percent: '15%' , status:'up'}
  ]

  return (
    <>
    <Box sx={{ flexGrow: 1, p: 3, marginTop: '3rem'  }}>
      <TitleSection>Dashboard</TitleSection>
    </Box>
    <Box sx={{ display: 'flex', flexWrap:'wrap', marginTop: '2rem'}}>
      {cards.map(card => {
          return (
              <CardMain key={card.title} cardTitle={card.title} cardPrice={card.price} cardPercent={card.percent}/>
          )
        })}
    </Box>
  </>
  )
}
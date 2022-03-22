
import { Box, Toolbar, Typography, Container, Button, Card, CardContent, CardActions } from "@mui/material"

export default function CardMain(props){
    return(
    <Card sx={{ minWidth: 275, minHeight: 136, backgroundColor: 'primary.main', margin: '1rem 0 0 2rem' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'space-evenly'}}>
            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
               {props.cardTitle}
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', mb: 1.5, fontWeight: 'bold' }}  color="text.primary">
            R$ {props.cardPrice}
            </Typography>
            <Box sx={{display: 'flex'}}>
                <Typography variant="body2" sx={{ fontSize: 15}}>
                   {props.cardPercent}
                </Typography>
            </Box>
        </CardContent>
    </Card>
  )
}
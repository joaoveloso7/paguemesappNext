import { Box, Toolbar, Typography, Container, Button, Card, CardContent, CardActions } from "@mui/material"
import Image from 'next/image';
import IconDown from '../../docs/down-icon.svg'
import IconUP from '../../docs/up-icon.svg'


export default function CardContentNumbers(props){

    return(
        <>
            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                {props.cardTitle}
            </Typography>
            <Typography sx={{ fontSize: '2.5rem', mb: 1.5, fontWeight: 'bold' }}  color="text.primary">
            R$ {props.cardPrice}
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography variant="body2" sx={{ fontSize: 15, color: !props.cardStatus ? 'error.main' : 'success.main'}}>
                    {props.cardPercent}
                </Typography>

                {!props.cardStatus ?  <Image src={IconDown} alt="Logo"/> : <Image src={IconUP} alt="Logo"/> }
            </Box> 
        </>
    )

}
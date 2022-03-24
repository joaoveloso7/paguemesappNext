
import { Box, Toolbar, Typography, Container, Button, Card, CardContent, CardActions } from "@mui/material"
import Image from 'next/image';
import IconDown from '../../docs/down-icon.svg'
import IconUP from '../../docs/up-icon.svg'

export default function CardMain(props){
    const cardMinWidth = props.minWidth;
    const cardMinHeight = props.minHeight;

    return(
    <Card sx={{ 
        minWidth: cardMinWidth, 
        minHeight: cardMinHeight, 
        backgroundColor: 'primary.main', 
        margin: { xs:'2rem 0 0 0rem' ,sm:'1rem 0 0 1rem', lg:'1rem 0 0 2rem'}, 
        borderRadius: '10px' 
    }}>

        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'space-evenly'}}> 
        {props.children}
        </CardContent> 
    </Card>
  )
}
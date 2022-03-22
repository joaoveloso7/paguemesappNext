import { Typography } from "@mui/material"



export default function TitleSection(props){
    return (
        <Typography variant='h3' sx={{marginBottom: '2rem', fontWeight: 'bold'}}>{props.children}</Typography>     
    )
}
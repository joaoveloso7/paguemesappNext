import { Box, Toolbar, Typography, Container, Button } from "@mui/material"



export default function ContasPagar(){
    return (
        <Box sx={{ display: 'flex', marginTop: '3rem'}}>
            <Box 
            sx={{ flexGrow: 1, p: 2  }}>
            <Typography variant='h3' sx={{marginBottom: '2rem', fontWeight: 'bold'}}>Contas a Pagar</Typography>     



            </Box>
        </Box>
    )
}
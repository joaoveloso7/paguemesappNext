import { Box, Toolbar, Typography, Container, Button } from "@mui/material"


export default function AddConta(){
    return(
        <Box sx={{ display: 'flex', marginTop: '2rem'}}>
            <Box 
            sx={{ flexGrow: 1, p: 3  }}>
            <Typography variant='h3' sx={{marginBottom: '2rem', fontWeight: 'bold'}}>Adicionar Conta</Typography>     

    
    
            </Box>
        </Box>
    )
}
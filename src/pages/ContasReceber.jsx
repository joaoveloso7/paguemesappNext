import { Box, Toolbar, Typography, Container, Button } from "@mui/material"


export default function ContasReceber(){
    return (
        <Box sx={{ display: 'flex', marginTop: '2rem'}}>
            <Box 
            sx={{ flexGrow: 1, p: 3  }}>
            <Typography variant='h3' sx={{marginBottom: '2rem', fontWeight: 'bold'}}>Contas a Receber</Typography>     



            </Box>
        </Box>
    )
}
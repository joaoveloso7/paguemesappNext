import { Box, Toolbar, Typography, Container, Button } from "@mui/material"
import makeStyles from '@mui/material';



export default function Home() {

  return (
    <Box sx={{ display: 'flex', marginTop: '2rem'}}>
      <Box 
        sx={{ flexGrow: 1, p: 3  }}>
        <Typography variant='h3' sx={{marginBottom: '2rem', fontWeight: 'bold'}}>Dashboard</Typography>     

      </Box>
    </Box>
  )
}
import { Box, Toolbar, Typography, Container, Button } from "@mui/material"
import TitleSection from "../components/TitleSection"


export default function ContasReceber(){
    return (
        <Box sx={{ display: 'flex', marginTop: '3rem'}}>
            <Box 
            sx={{ flexGrow: 1, p: 3  }}>
            <TitleSection>Contas a Receber</TitleSection>


            </Box>
        </Box>
    )
}
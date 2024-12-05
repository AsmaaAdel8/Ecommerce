import { Box, Typography, useTheme } from "@mui/material";


export default function Footer() {
    const Theme=useTheme();
  return (
    <Box bgcolor={Theme.palette.grey[500]} sx={{width:"100%", borderRadius:"15px 15px 0px 0px",p:1}}>
        <Typography variant="h5" color={Theme.palette.text.primary} textAlign={'center'}>This Website made by Asmaa Adel</Typography>
    </Box>
  )
}

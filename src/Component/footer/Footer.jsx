import { Box, Stack, Typography } from "@mui/material";
import "./footer.css";
export default function Footer() {
  // const Theme = useTheme();
  return (
    <Box
      bgcolor={"#1d7d9b"}
      sx={{
        width: "100%",
        height:"15%",
        borderRadius: "15px 15px 0px 0px",
        p: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      id="footer"
    >
      <Stack textAlign={"center"} id="stack">
        <Typography variant="h6">Compontent</Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          About Us
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Carrers
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Blog
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Gift Cards
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Magazine
        </Typography>
      </Stack>
      <Stack textAlign={"center"} id="stack">
        <Typography variant="h6">Support</Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Contact
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Legal Notice
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Terms and conditions
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          site map
        </Typography>
      </Stack>
      <Stack textAlign={"center"} id="stack">
        <Typography variant="h6">Other Services</Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Car hair
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Activity finder
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Tour List
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Flight finder
        </Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Travel Agents
        </Typography>
      </Stack>
      <Stack textAlign={"center"}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Our Mobile Number
        </Typography>
        <Typography variant="h6">+201113738420</Typography>
        <Typography variant="body1" lineHeight={"25px"}>
          Our Email Adress
        </Typography>
        <Typography variant="h6">adelfarouk011136@gmail.com</Typography>
      </Stack>
    </Box>
  );
}

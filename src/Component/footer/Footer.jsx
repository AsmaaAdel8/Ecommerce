import { Box, Stack, Typography } from "@mui/material";
import "./footer.css";
export default function Footer() {
  // const Theme = useTheme();
  return (
    <Box
      bgcolor={"#825B32"}
      sx={{
        width: "100%",
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
        <Typography variant="h4">Compontent</Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          About Us
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Carrers
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Blog
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Gift Cards
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Magazine
        </Typography>
      </Stack>
      <Stack textAlign={"center"} id="stack">
        <Typography variant="h4">Support</Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Contact
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Legal Notice
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Terms and conditions
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          site map
        </Typography>
      </Stack>
      <Stack textAlign={"center"} id="stack">
        <Typography variant="h4">Other Services</Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Car hair
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Activity finder
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Tour List
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Flight finder
        </Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Travel Agents
        </Typography>
      </Stack>
      <Stack textAlign={"center"}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Our Mobile Number
        </Typography>
        <Typography variant="h6">+201113738420</Typography>
        <Typography variant="body1" lineHeight={"40px"}>
          Our Email Adress
        </Typography>
        <Typography variant="h6">adelfarouk011136@gmail.com</Typography>
      </Stack>
    </Box>
  );
}

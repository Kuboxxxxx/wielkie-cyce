import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { CardTag } from "./CardTag";
import { Icon } from "@iconify/react";

export const StreamerCard = () => {
  return (
    <Box
      sx={{
        width: "30%",
        padding: "8px 16px",
        color: "#fdfdfd",
        backgroundColor: "#252525",
        marginBottom: "16px",
      }}
    >
      <Typography>kangurek_kao_pej</Typography>
      <Container sx={{ display: "flex" }}>
        <CardTag value="Wybuchowy" />
        <CardTag value="Dynamiczny" />
        <CardTag value="Głupkowate" />
      </Container>
      <img src="../img/avatar.jpg" />
      <Typography>Trzy słowa o streamerze</Typography>
      <Container sx={{ display: "flex", justifyContent: "space-around" }}>
        <Icon icon="ph:twitter-logo-thin" fontSize="30px" />
        <Icon icon="ph:instagram-logo-thin" fontSize="30px" />
        <Icon icon="ph:youtube-logo-thin" fontSize="30px" />
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            backgroundColor: "#5800FF",
            float: "right",
          }}
          startIcon={<Icon icon="mdi:twitch" />}
          href=""
        >
          Wbijam
        </Button>
      </Container>
    </Box>
  );
};

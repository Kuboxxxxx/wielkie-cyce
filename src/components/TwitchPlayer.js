import Box from "@mui/material/Box";

export const TwitchPlayer = () => {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <iframe
        src="https://player.twitch.tv/?channel=kangurek_kao_pej&parent=http://localhost:3000/"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        title="player"
        height="296px"
        width="528px"
      ></iframe>
    </Box>
  );
};

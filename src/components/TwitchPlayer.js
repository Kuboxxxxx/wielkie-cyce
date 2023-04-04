import Box from "@mui/material/Box";

export const TwitchPlayer = () => {
  return (
    <Box sx={{ width: "100%", height: "80%" }}>
      <iframe
        src="https://player.twitch.tv/?channel=kangurek_kao_pej&parent=http://localhost:3000/"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        title="player"
        height="100%"
        width="100%"
      ></iframe>
    </Box>
  );
};

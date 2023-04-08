import { StreamerCard } from "../components/StreamerCard";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export const Czlonkowie = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
        <StreamerCard />
      </Box>
    </Container>
  );
};

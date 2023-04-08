import { TwitchPlayer } from "../components/TwitchPlayer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Tag } from "../components/Tag";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Icon } from "@iconify/react";

export const Home = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", md: "nowrap" },
          padding: "50px 0",
        }}
      >
        <Container>
          <Box>
            <Typography
              component="h1"
              variant="h3"
              sx={{ color: "#fff", marginBottom: "8px" }}
            >
              wielkiecyce.pl
            </Typography>
          </Box>
          <Box
            sx={{
              height: "296px",
              backgroundColor: "#252525",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
                color: "#fdfdfd",
                padding: "8px 16px",
              }}
            >
              Świat najlepszych streamów
            </Typography>
            <Typography
              component="p"
              sx={{
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                color: "#f2f2f2",
                padding: "8px 16px",
              }}
            >
              Dołącz do jedynego takiego community,w którym dzielimy się swoimi
              doświadczeniami, wspieramy i inspirujemy się wzajemnie. Dołączając
              do naszej grupy, będziesz miał dostęp do wyjątkowych wydarzeń,
              spotkań oraz nieskończonego pokładu rozrywki!
            </Typography>
          </Box>
        </Container>
        <Container>
          <Typography
            component="h2"
            variant="h5"
            sx={{ color: "#fff", marginTop: "30px" }}
          >
            kangurek_kao_pej
          </Typography>
          <TwitchPlayer />
          <Box sx={{ display: "flex" }}>
            <Tag value={"Rozmowy"} />
            <Tag value={"Dynamiczny"} />
            <Tag value={"Glupkowate"} />
            <Button
              variant="contained"
              sx={{ marginLeft: "auto", backgroundColor: "#5800FF" }}
              startIcon={<Icon icon="mdi:twitch" />}
              href="https://www.twitch.tv/kangurek_kao_pej"
            >
              Wbijam
            </Button>
          </Box>
        </Container>
      </Box>
      <Box sx={{ display: "flex", flexWrap: { xs: "wrap", md: "nowrap" } }}>
        <Container>
          <Typography
            component="h3"
            sx={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "justify",
              color: "#fdfdfd",
            }}
          >
            Moje Socjale
          </Typography>
          <Box
            sx={{
              display: "flex",
              padding: "16px",
              marginBottom: "16px",
              backgroundColor: "#252525",
              borderRadius: "4px",
            }}
          >
            <Container>
              <Typography component="p" sx={{ color: "#fdfdfd" }}>
                Instagram
              </Typography>
              <Typography component="p" sx={{ color: "#cecece" }}>
                @kangurek_kao_pej
              </Typography>
            </Container>
            <Button
              sx={{
                padding: "8px 32px",
                color: "#fdfdfd",
                borderRadius: "2px",
              }}
              startIcon={<InstagramIcon />}
              variant="outlined"
              href="https://www.instagram.com/kangurek_kao_pej/"
              target="blank"
            >
              Sprawdź
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "16px",
              marginBottom: "16px",
              backgroundColor: "#252525",
              borderRadius: "4px",
            }}
          >
            <Container>
              <Typography component="p" sx={{ color: "#fdfdfd" }}>
                Twitter
              </Typography>
              <Typography component="p" sx={{ color: "#cecece" }}>
                @KaoPej
              </Typography>
            </Container>
            <Button
              sx={{
                padding: "8px 32px",
                color: "#fdfdfd",
                borderRadius: "2px",
              }}
              startIcon={<TwitterIcon />}
              variant="outlined"
              href="https://twitter.com/KaoPej"
              target="blank"
            >
              Sprawdź
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "16px",
              marginBottom: "16px",
              backgroundColor: "#252525",
              borderRadius: "4px",
            }}
          >
            <Container>
              <Typography component="p" sx={{ color: "#fdfdfd" }}>
                TikTok
              </Typography>
              <Typography component="p" sx={{ color: "#cecece" }}>
                @kangurekpej
              </Typography>
            </Container>
            <Button
              sx={{
                padding: "8px 32px",
                color: "#fdfdfd",
                borderRadius: "2px",
              }}
              startIcon={<Icon icon="ph:tiktok-logo-light" />}
              variant="outlined"
              href="https://www.tiktok.com/@kangurekpej"
              target="blank"
            >
              Sprawdź
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: "16px",
              backgroundColor: "#252525",
              borderRadius: "4px",
            }}
          >
            <Container>
              <Typography component="p" sx={{ color: "#fdfdfd" }}>
                YouTube
              </Typography>
              <Typography component="p" sx={{ color: "#cecece" }}>
                @kangurekkaopej8949
              </Typography>
            </Container>
            <Button
              sx={{
                padding: "8px 32px",
                color: "#fdfdfd",
                borderRadius: "2px",
              }}
              startIcon={<YouTubeIcon />}
              variant="outlined"
              href="https://www.youtube.com/@kangurekkaopej8949"
              target="blank"
            >
              Sprawdź
            </Button>
          </Box>
        </Container>
        <Box
          sx={{
            padding: "16px",
            backgroundColor: "#252525",
            borderRadius: "4px",
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "28px",
              color: "#fdfdfd",
            }}
          >
            Nasze najbliższe cele
          </Typography>
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#f2f2f2",
            }}
          >
            To dzięki Wam nieustannie polepszam jakość moich streamów! Wsparło
            mnie już ponad 1M subskrybentów, a dzięki zaufaniu 10M followersów
            poprawiam humor coraz większej liczbie widzów. Sprawdź jakie cele
            przed nami!
          </Typography>
          <Button
            variant="outlined"
            sx={{ padding: "8px 32px", color: "#fdfdfd", borderRadius: "2px" }}
          >
            Donate
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

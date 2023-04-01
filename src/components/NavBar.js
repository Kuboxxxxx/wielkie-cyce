import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const NavBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#252525" }}>
      <Drawer
        anchor="top"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <List sx={{ backgroundColor: "#252525", color: "#fff" }}>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/czlonkowie");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Członkowie" />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ backgroundColor: "#cfcfcf" }} />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/harmonogram");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Harmonogram" />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ backgroundColor: "#cfcfcf" }} />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/merch");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Merch" />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ backgroundColor: "#cfcfcf" }} />

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/wspolpraca");
                setIsOpen(false);
              }}
            >
              <ListItemText primary="Współpraca" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Container maxWidth>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{ my: 2, color: "#FDFDFD", display: "block" }}
              onClick={() => {
                navigate("/");
              }}
            >
              wielkiecyce.pl
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: "60px",
            }}
          >
            <Button
              sx={{ my: 2, color: "#FDFDFD" }}
              onClick={() => {
                navigate("/czlonkowie");
              }}
            >
              Członkowie
            </Button>

            <Button
              sx={{ my: 2, color: "#FDFDFD" }}
              onClick={() => {
                navigate("/harmonogram");
              }}
            >
              Harmonogram
            </Button>

            <Button
              sx={{ my: 2, color: "#FDFDFD" }}
              onClick={() => {
                navigate("/merch");
              }}
            >
              Merch
            </Button>

            <Button
              sx={{ my: 2, color: "#FDFDFD" }}
              onClick={() => {
                navigate("/wspolpraca");
              }}
            >
              Współpraca
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

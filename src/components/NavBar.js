import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Tutorials", "Blog", "Project Dashboard", "Community"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "0 -6px 12px",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              display: {
                xs: "flex",
                md: "none",
                justifyContent: "space-between",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: 27,
            }}
          >
            codenan
          </Typography>

          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                flex: "1",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: 27,
                }}
              >
                codenan
              </Typography>
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                flex: "3",
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "inline-block",
                    marginTop: 3,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                display: "1",
                flex: "1",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: "bold",
                  display: "inline-block",
                  backgroundColor: "#be3723",
                  marginTop: 3,
                  "&:hover": {
                    backgroundColor: "#d94730",
                  },
                }}
              >
                Sign Up
              </Button>
              <Button
                sx={{
                  my: 2,
                  fontWeight: "bold",
                  color: "black",
                  display: "inline-block",
                  marginLeft: "5px",
                  marginTop: 3,
                  "&:hover": {
                    backgroundColor: "#f6f6f6",
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
const pages = [
  {
    navTitle: "Blog",
    navLink: "blog"
  },
  {
    navTitle: "Tutorial",
    navLink: "tutorial"
  },
  {
    navTitle: "Dashboard",
    navLink: "dashboard"
  }
];

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
        color: "black"
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            display: {
              xs: "flex",
              md: "none",
              justifyContent: "space-between"
            }
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
              horizontal: "left"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left"
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" }
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link
                  to={page.navLink}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography>{page.navTitle}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Typography
          href="/"
          variant="h6"
          noWrap
          component="a"
          style={{ fontSize: "30px" }}
          sx={{
            display: { xs: "flex", md: "none" },
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            fontSize: "27px"
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
            alignItems: "center"
          }}
        >
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              flex: "1",
              justifyContent: "center"
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              style={{
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
                fontSize: "28px"
              }}
              sx={{
                display: { xs: "none", md: "flex" }
              }}
            >
              codenan
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              flex: "3",
              justifyContent: "center"
            }}
          >
            {pages.map((page, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link
                  to={page.navLink}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography>{page.navTitle}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            style={{
              display: "1",
              flex: "1",
              justifyContent: "center"
            }}
          >
            {/* <Button
                sx={{
                  my: 2,
                  color: "white",
                  fontWeight: "bold",
                  display: "inline-block",
                  backgroundColor: "black",
                  marginTop: 3,
                  "&:hover": {
                    backgroundColor: "#d94730"
                  }
                }}
              >
                <Typography> Sign Up</Typography>
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
                    backgroundColor: "#f6f6f6"
                  }
                }}
              >
                <Typography> Sign In</Typography>
              </Button> */}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Projects",
  "Contact",
];

const Navbar = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const top = element.offsetTop - 120;
        const bottom = top + element.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(
      section.toLowerCase()
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? "rgba(11,17,32,.80)"
          : "transparent",

        backdropFilter: scrolled ? "blur(18px)" : "none",

        transition: ".35s",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              cursor: "pointer",
              fontWeight: 700,
              color: "primary.main",
            }}
            onClick={() => scrollToSection("home")}
          >
            Saad Siddiqui
            
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
              >
                <Box
                  sx={{
                    width: 280,
                    height: "100%",
                    bgcolor: "#0B1120",
                    color: "#fff",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="flex-end"
                    p={2}
                  >
                    <IconButton
                      sx={{ color: "#fff" }}
                      onClick={() => setOpen(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        key={item}
                        disablePadding
                      >
                        <ListItemButton
                          selected={
                            activeSection ===
                            item.toLowerCase()
                          }
                          onClick={() =>
                            scrollToSection(item)
                          }
                          sx={{
                            "&.Mui-selected": {
                              background:
                                "rgba(56,189,248,.15)",

                              color: "#38BDF8",
                            },
                          }}
                        >
                          <ListItemText
                            primary={item}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() =>
                    scrollToSection(item)
                  }
                  sx={{
                    color:
                      activeSection ===
                      item.toLowerCase()
                        ? "#38BDF8"
                        : "#fff",

                    position: "relative",

                    fontWeight:
                      activeSection ===
                      item.toLowerCase()
                        ? 700
                        : 500,

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      bottom: 5,

                      left: 0,

                      width:
                        activeSection ===
                        item.toLowerCase()
                          ? "100%"
                          : "0%",

                      height: "2px",

                      background: "#38BDF8",

                      transition: ".3s",
                    },

                    "&:hover": {
                      color: "#38BDF8",
                      background: "transparent",

                      "&::after": {
                        width: "100%",
                      },
                    },
                  }}
                >
                  {item}
                </Button>
              ))}

              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  px: 3,
                  borderRadius: "12px",
                }}
                href="/saad_resume_final.pdf"
               
              >
                Resume
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
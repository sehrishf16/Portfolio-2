import {
  Box,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "#08101D",
        pt: 8,
        pb: 4,
        mt: 8,
        borderTop: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={4}
          alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight={700}
            color="primary"
          >
            Saad Siddiqui
          </Typography>

          <Typography
            color="text.secondary"
            textAlign="center"
            maxWidth={650}
          >
            Passionate Frontend Developer focused on building
            modern, responsive, and scalable web applications
            using React, TypeScript, Material UI, and Node.js.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
          >
            <IconButton
              href="https://github.com/saads07"
              target="_blank"
              sx={{
                bgcolor: "rgba(255,255,255,.05)",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton
              href="https://www.linkedin.com/in/saad-siddiqui-700a68288"
              target="_blank"
              sx={{
                bgcolor: "rgba(255,255,255,.05)",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              href="mailto:saadsiddiqui1771@gmail.com"
              sx={{
                bgcolor: "rgba(255,255,255,.05)",

                "&:hover": {
                  bgcolor: "primary.main",
                  color: "#fff",
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>

          <Divider
            sx={{
              width: "100%",
              borderColor: "rgba(255,255,255,.08)",
            }}
          />

          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            spacing={2}
          >
            <Typography color="text.secondary">
              © {new Date().getFullYear()} Saad Siddiqui. All Rights Reserved.
            </Typography>

            <Typography color="text.secondary">
              
            </Typography>
          </Stack>
        </Stack>

        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 30,
            right: 30,
            bgcolor: "primary.main",
            color: "#fff",
            width: 55,
            height: 55,
            boxShadow: "0 10px 25px rgba(56,189,248,.4)",

            "&:hover": {
              bgcolor: "#22D3EE",
              transform: "translateY(-5px)",
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
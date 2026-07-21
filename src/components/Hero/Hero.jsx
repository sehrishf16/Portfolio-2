import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaDownload } from "react-icons/fa";

import heroImage from "../../assets/images/Saad1.png";

const Hero = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0B1120 0%,#111827 45%,#0B1120 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          background: "#38BDF8",
          borderRadius: "50%",
          filter: "blur(180px)",
          opacity: 0.18,
          top: -100,
          left: -120,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          background: "#22D3EE",
          borderRadius: "50%",
          filter: "blur(180px)",
          opacity: 0.15,
          right: -80,
          bottom: -100,
        }}
      />

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={8}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                color: "#38BDF8",
                mb: 2,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              HELLO THERE 👋
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              I'm
              <br />
              <span style={{ color: "#38BDF8" }}>Saad Siddiqui</span>
            </Typography>

            <Box mt={3}>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React Native Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{
                  fontSize: "28px",
                  color: "#CBD5E1",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 560,
                color: "#94A3B8",
                lineHeight: 2,
                fontSize: "1.05rem",
              }}
            >
              Passionate Frontend Developer focused on building scalable, modern
              and responsive web applications using React, TypeScript and
              Material UI. I enjoy crafting intuitive user experiences with
              clean, maintainable code.
            </Typography>

            {/* Buttons */}
            <Stack direction="row" spacing={2} mt={5} flexWrap="wrap">
              <Button
                variant="contained"
                size="large"
                startIcon={<FaLinkedin />}
                component="a"
                href="https://www.linkedin.com/in/saad-siddiqui-700a68288"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                LinkedIn
              </Button>

              <Button
                component="a"
                href="/saad_resume_final.pdf"
                download
                variant="outlined"
                size="large"
                startIcon={<FaDownload />}
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Download Resume
              </Button>
            </Stack>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              component="img"
              src={heroImage}
              alt="Saad1"
              sx={{
                width: {
                  xs: 280,
                  md: 280,
                },
                borderRadius: "80px",
                border: "4px solid rgba(255,255,255,.08)",
                boxShadow: "0 30px 80px rgba(0,0,0,.45)",
              }}
            />
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;

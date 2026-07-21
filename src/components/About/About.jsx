import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

import CodeIcon from "@mui/icons-material/Code";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const cards = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: "Frontend Development",
    description:
      "Building scalable and responsive web applications using React, TypeScript, JavaScript and Material UI.",
  },
  {
    icon: <LaptopMacIcon sx={{ fontSize: 40 }} />,
    title: "Modern UI",
    description:
      "Creating clean, interactive and user-friendly interfaces with responsive layouts and reusable components.",
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
    title: "Performance",
    description:
      "Optimizing applications for speed, maintainability and seamless user experience.",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 40 }} />,
    title: "Continuous Learning",
    description:
      "Passionate about learning new technologies and building impactful digital products.",
  },
];

const stats = [
  {
    value: "1+",
    label: "Years Experience",
  },
  {
    value: "5+",
    label: "Projects",
  },
  {
    value: "8+",
    label: "Technologies",
  },
  {
    value: "100%",
    label: "Dedication",
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#0F172A",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="primary"
          textAlign="center"
          fontWeight={600}
          letterSpacing={2}
        >
          ABOUT ME
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          mt={2}
          mb={3}
        >
          Passionate Software Developer
        </Typography>


        <Grid container spacing={4} mt={6}>
          {cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
            >
              <motion.div
                whileHover={{
                  y: -10,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    textAlign: "center",
                    borderRadius: 2,
                    transition: ".3s",

                    "&:hover": {
                      border: "1px solid #38BDF8",
                    },
                  }}
                >
                  <Box
                    color="primary.main"
                    mb={2}
                  >
                    {card.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    mb={2}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                  >
                    {card.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          spacing={3}
          mt={8}
        >
          {stats.map((item, index) => (
            <Grid
              item
              xs={6}
              md={3}
              key={index}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "right",
                }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  fontWeight={700}
                >
                  {item.value}
                </Typography>

                <Typography
                  mt={1}
                  color="text.secondary"
                >
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;





import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import SchoolIcon from "@mui/icons-material/School";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    university: "MGM University",
    location: "Chhatrapati Sambhajinagar, India",
    duration: "Graduated • May 2026",
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#0F172A",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          color="primary"
          textAlign="center"
          fontWeight={600}
          letterSpacing={2}
        >
          EDUCATION
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mt={2}
          mb={3}
        >
          Academic Journey
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={8}
        >
          My academic background has provided a strong foundation in software
          development, problem-solving, and modern technologies.
        </Typography>

        <Grid
          container
          justifyContent="center"
        >
          {education.map((item, index) => (
            <Grid
              item
              xs={12}
              md={8}
              key={index}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 4, md: 5 },
                    borderRadius: 2,
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: ".3s",
                    "&:hover": {
                      borderColor: "#38BDF8",
                      boxShadow: "0 15px 35px rgba(56,189,248,0.15)",
                    },
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    alignItems="center"
                  >
                    <Grid
                      item
                      xs={12}
                      sm={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: "50%",
                          bgcolor: "rgba(56,189,248,0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.main",
                        }}
                      >
                        <SchoolIcon sx={{ fontSize: 42 }} />
                      </Box>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={10}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                      >
                        {item.degree}
                      </Typography>

                      <Typography
                        color="primary"
                        fontWeight={600}
                        mt={1}
                      >
                        {item.duration}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        mt={2}
                      >
                        {item.university}
                      </Typography>

                      <Typography color="text.secondary">
                        {item.location}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
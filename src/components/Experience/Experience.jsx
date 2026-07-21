import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";

import experience from "../../data/experience";

const Experience = () => {
  return (
    <Box
      id="experience"
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
          EXPERIENCE
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          mt={2}
          mb={8}
        >
          My Professional Journey
        </Typography>

        <Box
          sx={{
            position: "relative",
            maxWidth: 900,
            mx: "auto",
          }}
        >
          {/* Timeline */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: 20, md: 35 },
              top: 0,
              bottom: 0,
              width: "3px",
              bgcolor: "primary.main",
              opacity: 0.35,
            }}
          />

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  mb: 6,
                  position: "relative",
                }}
              >
                {/* Timeline Icon */}
                <Box
                  sx={{
                    width: 70,
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      boxShadow:
                        "0 0 25px rgba(56,189,248,.45)",
                    }}
                  >
                    <WorkIcon />
                  </Box>
                </Box>

                {/* Experience Card */}
                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 4,
                    ml: 3,
                    borderRadius: 2,
                    background: "rgba(255,255,255,.04)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    transition: ".3s",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "#38BDF8",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                  >
                    {item.role}
                  </Typography>

                  <Typography
                    color="primary"
                    fontWeight={600}
                    mt={1}
                  >
                    {item.company}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    mb={3}
                  >
                    {item.duration}
                  </Typography>

                  <Box
                    component="ul"
                    sx={{
                      pl: 3,
                      mb: 3,
                    }}
                  >
                    {item.description.map((point, i) => (
                      <Typography
                        component="li"
                        key={i}
                        color="text.secondary"
                        sx={{
                          mb: 1.5,
                          lineHeight: 1.8,
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                  >
                    {item.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        color="primary"
                        variant="outlined"
                        sx={{
                          borderRadius: 5,
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import projects from "../../data/projects";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg,#111827 0%,#0B1120 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          color="primary"
          textAlign="center"
          fontWeight={600}
          letterSpacing={2}
        >
          MY PROJECTS
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          mt={2}
          mb={8}
        >
          Featured Work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{ y: -10 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    background: "rgba(255,255,255,.04)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    transition: ".3s",

                    "&:hover": {
                      borderColor: "#38BDF8",
                      boxShadow:
                        "0 15px 35px rgba(56,189,248,.15)",
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    mb={4}
                  >
                    {project.technologies.map((tech) => (
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

                  <Stack
                    direction="row"
                    spacing={2}
                  >
                    

                    
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";

import skills from "../../data/skills";

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: "#0F172A",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          color="primary"
          textAlign="center"
          fontWeight={600}
          letterSpacing={2}
        >
          MY SKILLS
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mt={2}
          mb={3}
        >
          Technologies I Work With
        </Typography>

      

        <Grid container spacing={4} justifyContent="center">
          {skills.map((group, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div
                whileHover={{ y: -8 }}
                style={{ width: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: "#111827",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: "100%",
                    transition: "0.3s",

                    "&:hover": {
                      borderColor: "#38BDF8",
                      boxShadow: "0 12px 30px rgba(56,189,248,0.15)",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.5}
                    useFlexGap
                    flexWrap="wrap"
                  >
                    {group.items.map((item, i) => (
                      <Chip
                        key={i}
                        label={item}
                        sx={{
                          bgcolor: "#1E293B",
                          color: "#fff",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                          borderRadius: "10px",
                          px: 1,
                          py: 2.5,
                          transition: "0.3s",

                          "&:hover": {
                            bgcolor: "#38BDF8",
                            color: "#fff",
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    ))}
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

export default Skills;
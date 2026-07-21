import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const contactInfo = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "saadsiddiqui1771@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    value: "+91 9607080489",
  },
  {
    icon: <GitHubIcon />,
    title: "GitHub",
    value: "github.com/saads07",
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    value: "linkedin.com/in/saad-siddiqui",
  },
];

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSnackbar({
        open: true,
        severity: "success",
        message: "Message sent successfully!",
      });

      form.current.reset();
    } catch (error) {
      console.log(error);

      setSnackbar({
        open: true,
        severity: "error",
        message: "Failed to send message!",
      });
    }

    setLoading(false);
  };

  return (
    <Box
      id="contact"
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
          CONTACT
        </Typography>

        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mt={2}
          mb={8}
        >
          Let's Work Together
        </Typography>

        <Grid
          container
          spacing={5}
          alignItems="flex-start"
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                mb={2}
              >
                Get in Touch
              </Typography>

              <Typography
                color="text.secondary"
                mb={4}
                lineHeight={1.8}
              >
                I'm always interested in discussing new projects,
                frontend development opportunities or collaborations.
                Feel free to reach out anytime.
              </Typography>

              <Stack spacing={2.5}>
                {contactInfo.map((item, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    sx={{
                      p: 2.5,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      bgcolor: "#1E293B",
                      borderRadius: 2,
                      border:
                        "1px solid rgba(255,255,255,0.08)",
                      transition: ".3s",

                      "&:hover": {
                        borderColor: "#38BDF8",
                        transform: "translateX(8px)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 55,
                        height: 55,
                        borderRadius: "50%",
                        bgcolor:
                          "rgba(56,189,248,.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#38BDF8",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography fontWeight={600}>
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#CBD5E1",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: "#111827",
                  borderRadius: 2,
                  border:
                    "1px solid rgba(255,255,255,.08)",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  mb={4}
                >
                  Send a Message
                </Typography>

                <Stack
                  component="form"
                  ref={form}
                  onSubmit={sendEmail}
                  spacing={3}
                >
                  <TextField
                    fullWidth
                    required
                    name="from_name"
                    label="Full Name"
                  />

                  <TextField
                    fullWidth
                    required
                    type="email"
                    name="from_email"
                    label="Email Address"
                  />

                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={6}
                    name="message"
                    label="Your Message"
                  />
                                    <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <CircularProgress
                          size={20}
                          color="inherit"
                        />
                      ) : (
                        <SendIcon />
                      )
                    }
                    sx={{
                      py: 1.8,
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: 16,
                    }}
                  >
                    {loading
                      ? "Sending..."
                      : "Send Message"}
                  </Button>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() =>
            setSnackbar({
              ...snackbar,
              open: false,
            })
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Alert
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        bgcolor: "#0B1120",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1.1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        <CircularProgress
          size={70}
          thickness={4}
        />
      </motion.div>

      <Typography
        mt={4}
        color="primary"
        variant="h5"
        fontWeight={700}
      >
        Saad Siddiqui
      </Typography>

      <Typography
        color="text.secondary"
        mt={1}
      >
        Loading Portfolio...
      </Typography>
    </Box>
  );
};

export default Loader;
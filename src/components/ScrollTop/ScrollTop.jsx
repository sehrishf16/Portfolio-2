import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scroll = window.scrollY;

      const percentage = (scroll / totalHeight) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        width: `${progress}%`,
        background:
          "linear-gradient(90deg,#38BDF8,#22D3EE)",
        zIndex: 9999,
        transition: "width .1s linear",
        boxShadow: "0 0 15px #38BDF8",
      }}
    />
  );
};

export default ScrollProgress;
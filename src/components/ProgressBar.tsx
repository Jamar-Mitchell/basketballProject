import { Box, LinearProgress } from "@mui/material";
import React from "react";


export default function ProgressBar () {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);

    return (
        <>
        <Box >
            <LinearProgress variant="determinate" value={progress} />
        </Box>
        </>
    )
}
import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { Player } from "../types/player";

type ProgressBarProps = {
  comparisonsleft: number;
  totalComparisons: number;
};

export default function ProgressBar(props: ProgressBarProps) {
  // const userProgress = useUserProgressContext();

  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const progress = 100 - (props.comparisonsleft / props.totalComparisons) * 100;
  // console.log("progress", progress);

  return (
    <>
      <Box>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </>
  );
}

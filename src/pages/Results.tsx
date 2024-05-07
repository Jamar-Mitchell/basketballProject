import { Button } from "@mui/material";
import "./Results.css";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const navigate = useNavigate();

  return (
    <div className="resultsContainer">
      <h1>Your results have been submitted!</h1>
      <Button onClick={() => navigate("/")}>Start Again</Button>
    </div>
  );
}

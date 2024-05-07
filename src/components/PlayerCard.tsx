import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Grid, Paper, styled } from "@mui/material";
import "./PlayerCard.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "none",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "unset",
}));

export default function PlayerCard() {
  const handlePlayerClick = () => {
    console.log("player clicked");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handlePlayerClick()}>
        <CardMedia
          sx={{ minHeight: 300 }}
          image={require("../images/player.jpg")}
          title="green iguana"
        />
        <CardContent className="playerCardContent">
          <Typography gutterBottom variant="h5" component="div">
            Player Name
          </Typography>
          <Divider component="li" />
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

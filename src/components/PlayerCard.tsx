import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Grid, Paper, styled } from "@mui/material";
import "./PlayerCard.css";
import { Player } from "../types/player";
import { getPlayerPhoto } from "../data/helper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "none",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "unset",
}));

type PlayerCardType = {
  playerData: Player;
  onClick: () => void;
};
export default function PlayerCard(props: PlayerCardType) {
  const { playerData, onClick } = props;
  const handlePlayerClick = () => {
    onClick();
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
            {`${playerData.playerName}`}
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

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
          image={require(`../images/${playerData.pictureName}`)}
          title={`${playerData.playerName}`}
        />
        <CardContent className="playerCardContent">
          <Typography gutterBottom variant="subtitle1" component="div">
            {`${playerData.playerName}`}
          </Typography>
          <Divider />
          <Typography gutterBottom variant="subtitle2">
            {`${playerData.nationality}`}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            {`${playerData.teamName}`}
          </Typography>
          <Typography gutterBottom variant="subtitle2">
            Physical:
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Item>{`Height: ${playerData.height}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`Weight: ${playerData.weight}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`BPG: ${playerData.bpg}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`GP: ${playerData.gp}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`Min/G: ${playerData.mpg}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`PPG: ${playerData.ppg}`}</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>{`RPG: ${playerData.rpg}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`FT: ${playerData.ft}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`APG: ${playerData.apg}`}</Item>
            </Grid>

            <Grid item xs={4}>
              <Item>{`3PT%: ${playerData.threePt}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`SPG: ${playerData.spg}`}</Item>
            </Grid>
            <Grid item xs={4}>
              <Item>{`TOPG: ${playerData.topg}`}</Item>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

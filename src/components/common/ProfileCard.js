import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const ProfileCard = ({ src, title, subSpecialties }) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        style={{ objectFit: "contain" }}
        component='img'
        height='80'
        image={src}
        alt='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {subSpecialties}
        </Typography>
      </CardContent>
    </Card>
  );
};

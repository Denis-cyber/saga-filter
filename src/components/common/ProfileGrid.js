import React from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { ProfileCard } from "./ProfileCard";

export const ProfileGrid = ({ profiles = [], loading }) => {
  if (loading || !profiles) {
    return (
      <Grid container justify='center'>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {profiles.map((profile) => (
        <div key={profile.id} style={{ padding: 10 }}>
          <ProfileCard src={profile.avatar} title={profile.name} subSpecialties={profile.job} />
        </div>
      ))}
    </div>
  );
};

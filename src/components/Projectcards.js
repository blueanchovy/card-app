import React from "react";
import Projectcard from "./Projectcard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Card } from "@mui/material";

function Projectcards() {
  return (
    <div>
      {/* card */}

      <Card
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          m: 2,
          backgroundColor: "#45a5ed",
        }}
      >
        <Box sx={{ m: 2 }}>Total Projects = 4</Box>
        <Box sx={{ m: 2 }}>Total Budget = 18000</Box>
      </Card>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={38}
        sx={{ p: 4, maxWidth: "100vw" }}
      >
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
        <Grid item xs={2}>
          <Projectcard />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        sx={{ position: "fixed", right: "5%", bottom: "5%" }}
      >
        Add Project
      </Button>
    </div>
  );
}

export default Projectcards;

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";

function Projectcard() {
  return (
    <div>
      <Card sx={{ minWidth: 275, backgroundColor: "#a8cff7" }}>
        <CardContent>
          <Typography variant="body1">Card Name: Project 01</Typography>
          <Typography variant="body1">Project Budget: 5000</Typography>
          <Typography variant="body1">
            Project End Date:{" "}
            <Box
              component="span"
              sx={{ fontSize: "0.7rem", backgroundColor: "white" }}
            >
              03/07/2022, 2:39 pm
            </Box>
          </Typography>
        </CardContent>
        <Divider sx={{ backgroundColor: "#927cc7", height: "2px" }} />
        <CardActions>
          <Button size="small">Edit Card</Button>
          <Button size="small">Delete Card</Button>
          <Button size="small">Copy Card</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Projectcard;

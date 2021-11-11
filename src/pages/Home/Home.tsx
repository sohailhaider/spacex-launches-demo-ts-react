import React from "react";
import { Container, Typography } from "@mui/material";

export function Home(props: any) {
  return (
    <Container>
      <Typography variant="h2" component="h2" gutterBottom>
        Spacex Recent Launches
      </Typography>
      {props.children}
    </Container>
  );
}

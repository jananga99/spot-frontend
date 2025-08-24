import React from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        🚀 Crypto Tracker
      </Typography>
      <Dashboard />
    </Container>
  );
}

export default App;

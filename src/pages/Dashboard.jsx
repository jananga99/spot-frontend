import React from "react";
import { Grid } from "@mui/material";
import CoinCard from "../components/CoinCard";

function Dashboard() {
  const coins = [
    { name: "Bitcoin", symbol: "BTC", risk: "Stable" },
    { name: "Ethereum", symbol: "ETH", risk: "Low Risk" },
  ];

  return (
    <Grid container spacing={2}>
      {coins.map((coin) => (
        <Grid item xs={12} sm={6} md={4} key={coin.symbol}>
          <CoinCard coin={coin} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;

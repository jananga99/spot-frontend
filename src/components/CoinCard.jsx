import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CoinCard({ coin }) {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">
          {coin.symbol} — {coin.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Risk: {coin.risk}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CoinCard;

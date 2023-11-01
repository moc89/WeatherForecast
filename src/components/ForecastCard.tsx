import React from "react";
import { Typography, Card, CardContent } from "@mui/material";

const styles = {
  gridItem: {
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  dateText: {
    color: "#4A90E2",
    textAlign: "center" as "center",
  },
  temperatureText: {
    color: "#E94E77",
    textAlign: "center" as "center",
  },
  weatherText: {
    color: "#50E3C2",
    textAlign: "center" as "center",
  },
  cardFullHeight: {
    height: "100%",
  },
};

export const ForecastCard: React.FC<{ forecast: any }> = ({ forecast }) => {
  return (
    <Card style={styles.cardFullHeight}>
      <CardContent>
        <Typography variant="h6" style={styles.dateText} data-testid="date">
          {forecast.dt_txt}
        </Typography>
        <Typography
          variant="body1"
          style={styles.temperatureText}
          data-testid="temperature"
        >
          Temp: {forecast.main.temp}°C
        </Typography>
        <Typography
          variant="body2"
          style={styles.weatherText}
          data-testid="weather"
        >
          Weather: {forecast.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

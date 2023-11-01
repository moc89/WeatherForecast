import { useWeatherForecast } from "./hooks/useWeatherForecast";
import { Container, Typography, Grid } from "@mui/material";
import { ForecastCard } from "./components/ForecastCard";
import "./App.css";

const styles = {
  gridItem: {
    minHeight: "150px",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center" as "center",
  },
};
export const App = () => {
  const { data, error, isLoading } = useWeatherForecast("Milton Keynes");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom data-testid="header">
        5-day Weather Forecast for Milton Keynes
      </Typography>
      <Grid container spacing={3}>
        {data?.list.map((forecast: object, index: number) => (
          <Grid item xs={12} sm={6} md={2} key={index} style={styles.gridItem}>
            <ForecastCard forecast={forecast} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;

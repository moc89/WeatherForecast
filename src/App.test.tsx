import { waitFor, renderHook, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { useWeatherForecast } from "./hooks/useWeatherForecast";

it("should render a loading message while the weather forecast is being fetched", async () => {
  const { result } = renderHook(() => useWeatherForecast("London"));

  expect(result.current.isLoading).toBe(true);

  render(<App />);

  //Expect the loading message to be displayed on initialization
  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

it("should render the date forecast data if it is successfully fetched", async () => {
  const { result } = renderHook(() => useWeatherForecast("London"));

  render(<App />);

  await waitFor(() => expect(result.current.isLoading).toBe(false));
  await waitFor(() => expect(result.current.error).toBe(null));

  // Expect the weather temperature forecast data to be displayed
  await waitFor(() =>
    expect(screen.getAllByTestId("temperature")[0]).toBeInTheDocument()
  );
});

it("should render the header forecast data if it is successfully fetched", async () => {
  const { result } = renderHook(() => useWeatherForecast("London"));

  render(<App />);

  await waitFor(() => expect(result.current.isLoading).toBe(false));
  await waitFor(() => expect(result.current.error).toBe(null));

  // Expect the weather temperature forecast data to be displayed
  await waitFor(() => expect(screen.getByTestId("header")).toBeInTheDocument());
});

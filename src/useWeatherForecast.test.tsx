import React from "react";
import { waitFor, renderHook } from "@testing-library/react";
import { useWeatherForecast } from "./hooks/useWeatherForecast";

describe("useWeatherForecast hook", () => {
  it("Should update isLoading property when api call completed", async () => {
    const { result } = renderHook(() => useWeatherForecast("London"));

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it("Should fetch weather data api successfully for the given city", async () => {
    const { result } = renderHook(() => useWeatherForecast("London"));

    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.error).toBe(null));
  });

  it("should be at least one weather data on the list for the given city", async () => {
    const { result } = renderHook(() => useWeatherForecast("London"));

    await waitFor(() =>
      expect(result.current.data.list.length).toBeGreaterThanOrEqual(1)
    );
  });

  it("should not return any data when the given city is empty", async () => {
    const { result } = renderHook(() => useWeatherForecast(""));

    await waitFor(() => expect(result.current.data).toBeNull());
  });
});

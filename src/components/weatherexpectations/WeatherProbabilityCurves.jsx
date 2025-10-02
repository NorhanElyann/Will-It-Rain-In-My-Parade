import WeatherChartExpectaions from "./WeatherChartExpectaions";

export default function WeatherProbabilityCurves({ weeklyData }) {
  return (
    <div>
      <h4>Weather Probability Curves</h4>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex-1">
          <WeatherChartExpectaions
            title="Rainfall Probability"
            data={weeklyData.rainfall}
            color="#3b82f6"
          />
        </div>
        <div className="flex-1">
          <WeatherChartExpectaions
            title="Temperature Probability"
            data={weeklyData.temp}
            color="#f97316"
          />
        </div>
        <div className="flex-1">
          <WeatherChartExpectaions
            title="Wind Probability"
            data={weeklyData.wind}
            color="#10b981"
          />
        </div>
        <div className="flex-1">
          <WeatherChartExpectaions
            title="Humidity Probability"
            data={weeklyData.humidity}
            color="#6366f1"
          />
        </div>
      </div>
    </div>
  );
}

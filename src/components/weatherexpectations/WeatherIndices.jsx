import WeatherIndexCard from "./WeatherIndexCard";

export default function WeatherIndices({ data }) {
  return (
    <div className="mb-10">
      <h4>Weather Indics</h4>
      <div className="my-4 flex justify-between gap-4">
        <div className="flex-1">
          <WeatherIndexCard title="Rainfall" value={`${data.rainfall}%`} />
        </div>
        <div className="flex-1">
          <WeatherIndexCard title="Temperature" value={`${data.temp}°C`} />
        </div>
        <div className="flex-1">
          <WeatherIndexCard title="Wind" value={`${data.wind} km/h`} />
        </div>
        <div className="flex-1">
          <WeatherIndexCard title="Humidity" value={`${data.humidity}%`} />
        </div>
      </div>
    </div>
  );
}

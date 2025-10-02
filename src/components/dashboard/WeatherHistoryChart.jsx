import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { year: 2015, temp: 27.9, rain: 18 },
  { year: 2016, temp: 29.3, rain: 40 },
  { year: 2017, temp: 28.1, rain: 21 },
  { year: 2018, temp: 28.3, rain: 19 },
  { year: 2019, temp: 28.5, rain: 17 },
  { year: 2020, temp: 28.6, rain: 12 },
  { year: 2021, temp: 28.8, rain: 15 },
  { year: 2022, temp: 29.0, rain: 20 },
  { year: 2023, temp: 29.2, rain: 14 },
  { year: 2024, temp: 29.3, rain: 16 },
];

const WeatherHistoryChart = () => {
  return (
    <div className="w-full h-[300px] bg-white ">
      <h2 className="text-lg font-semibold mb-4">Changes Rates Over 10Y</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            yAxisId="left"
            label={{ value: "Temp (°C)", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Rainfall (mm)",
              angle: -90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temp"
            stroke="#1d4ed8"
            strokeWidth={2}
            activeDot={{ r: 6 }}
            name="Avg Temp (°C)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="rain"
            stroke="#06b6d4"
            strokeWidth={2}
            name="Avg Rainfall (mm)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherHistoryChart;
